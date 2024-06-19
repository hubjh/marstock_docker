from elasticsearch import Elasticsearch
from collections import Counter

# Elasticsearch 클라이언트 생성
es = Elasticsearch(["http://localhost:9200"])

# 데이터 색인할 index와 mapping 정의
index_name = "test_index"  # index 이름
query = {
  "query": {
    "bool": {
      "must": [
        {
          "query_string": {
            "default_field": "content",
            "query": "*가나다*"
          }
        }
      ]
    }
  },
  "sort": [
    {
      "eventdate": {
        "order": "desc"
      }
    }
  ]
    }

# 쿼리 실행
result = es.search(index=index_name, body=query)

# for row in result['hits']['hits']:
#     print(row["_source"])
    

# 검색된 문서의 eventdate를 가져옵니다.
eventdates = [hit["_source"]["eventdate"] for hit in result['hits']['hits']]

# eventdate의 빈도수를 계산합니다.
eventdate_counts = Counter(eventdates)

# eventdate가 중복되는지 확인하고 로직을 추가합니다.
if any(count > 1 for count in eventdate_counts.values()):
    print("키워드 추출 보류!! pass")
else:
    ori_article = result['hits']['hits'][0]["_source"]
    print(f"키워드 추출 성공!! {ori_article}")    # 이걸로 추출했던 DB.es_id와 비교해서 같으면 넘기고, 다르면 keyword["id"]를 업데이트

