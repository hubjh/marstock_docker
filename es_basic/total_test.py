from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
from collections import Counter
import pymysql

# Elasticsearch 연결 설정
es = Elasticsearch(["http://localhost:9200"])

# MySQL 연결 설정
conn = pymysql.connect(
    host='localhost',
    user='marstock',
    password='1234',
    database='marstock'
)

# 테이블 이름
table_name = 'example_table'

index_name = "test_index"  # index 이름

# DB SELECT 쿼리
select_query = f"SELECT * FROM {table_name}"

# Elasticsearch 쿼리를 실행하는 함수
def search_elasticsearch(content):
    # query = {
    #     "query": {
    #         "bool": {
    #             "must": [
    #                 {
    #                     "query_string": {
    #                         "default_field": "content",
    #                         "query": f"*{content}*"
    #                     }
    #                 }
    #             ]
    #         }
    #     },
    #     "sort": [
    #         {
    #             "eventdate": {
    #                 "order": "desc"
    #             }
    #         }
    #     ]
    # }
    {"index": "my_index", "type": "_doc"},
    {
        "query": {
            "bool": {
                "must": [
                    {"match": {"field1": "value1"}}
                ],
                "from": 0,
                "size": 1
            }
        }
    },
    return es.search(index=index_name, body=query)

_pass = 0
_maintain = 0
_update = 0
_delete = 0
pass_ids = []

# 커서 생성
cursor = conn.cursor()

cursor.execute(select_query)

# DB SELECT 결과 가져오기
rows = cursor.fetchall()

# 가져온 데이터 처리
for row in rows:
    # DB 레코드의 필요한 정보 추출
    db_id, keyword = row[0], row[2]
    
    # Elasticsearch에서 키워드로 검색
    result = search_elasticsearch(keyword)

    # 검색 결과가 없는 경우 DELETE 처리
    if not result['hits']['hits']:
        _delete += 1
        print(f"DELETE {row}")
        delete_query = f"DELETE FROM {table_name} WHERE ID = %s"
        cursor.execute(delete_query, (db_id,))
        continue

    # 검색된 문서의 eventdate를 가져옵니다.
    eventdates = [hit["_source"]["eventdate"] for hit in result['hits']['hits']]

    # eventdate의 빈도수를 계산합니다.
    eventdate_counts = Counter(eventdates)

    # eventdate가 중복되는지 확인하고 로직을 추가합니다.
    if any(count > 1 for count in eventdate_counts.values()):
        _pass += 1
        print(f"PASS {row}")
        pass_ids.append(db_id)
    else:
        ori_article = result['hits']['hits'][0]["_source"]
        if row[1] != ori_article['id']: 
            _update += 1
            print(f"UPDATE {row}")
            update_query = f"UPDATE {table_name} SET ES_ID = %s WHERE ID = %s"
            cursor.execute(update_query, (ori_article['id'], db_id))
        else: 
            _maintain += 1
            print(f"MAINTAIN {row}")

# 커서 / DB 연결 종료
cursor.close()
conn.close()

print(f'''
total : {len(rows)}
MAINTAIN : {_maintain}
UPDATE : {_update}
DELETE : {_delete}
PASS : {_pass}
PASS_IDS = {pass_ids}
''')
#     # total:15   보류:3  유지:7  UPDATE:2  DELETE:3

#     # T T  가나    중복  보류
#     # T T  파하         유지
#     # T T  콜릿         유지
#     # T T  아자    중복  보류
#     # T T  테이너        유지
#     # T T  돜           유지
#     # T T  유후          유지
#     # T T  de           유지
#     # T T  jkl          유지
#     # T T  ab     중복  보류
#     # F T  가나다       UPDATE
#     # F T  이너         UPDATE
#     # F F  이냐         DELETE
#     # T F  마바샤        DELETE
#     # T F  아자챠        DELETE