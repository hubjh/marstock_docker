from elasticsearch import Elasticsearch

# Elasticsearch 클라이언트 생성
es = Elasticsearch(["http://localhost:9200"])

# 데이터 색인할 index와 mapping 정의
index_name = "test_index"  # index 이름
mapping = {
    "properties": {
        "id": {"type": "keyword"},  # id 필드, keyword 타입
        "content": {"type": "text"},  # content 필드, text 타입
        "eventdate": {"type": "date"}  # eventdate 필드, date 타입
    }
}

# index가 이미 존재하는지 확인하고 없으면 생성
if not es.indices.exists(index=index_name):
    es.indices.create(index=index_name, body={"mappings": mapping})
    print(f"Index '{index_name}'가 생성되었습니다.")

# 데이터 색인
data = [
    # {"id": "1", "content": "가나다라마바사", "eventdate": "2024-04-25T12:00:00"},
    # {"id": "2", "content": "아자차카타파하", "eventdate": "2024-04-26T12:00:00"},
    # {"id": "3", "content": "가나초콜릿", "eventdate": "2024-04-25T12:00:00"},
    # {"id": "4", "content": "아자자자", "eventdate": "2024-04-26T12:00:00"},
    # {"id": "5", "content": "컨테이너", "eventdate": "2024-04-22T12:00:00"},
    # {"id": "6", "content": "돜어", "eventdate": "2024-04-21T12:00:00"},
    # {"id": "7", "content": "유후후우우우", "eventdate": "2024-04-23T02:00:00"},
    # {"id": "8", "content": "abcdefg", "eventdate": "2024-04-25T12:00:00"},
    # {"id": "9", "content": "hijklmn", "eventdate": "2024-04-26T12:00:00"},
    # {"id": "10", "content": "abczxc", "eventdate": "2024-04-25T12:00:00"},
    # {"id": "11", "content": "hijopp", "eventdate": "2024-04-26T12:00:00"},
    # {"id": "12", "content": "container", "eventdate": "2024-04-22T12:00:00"},
    # {"id": "13", "content": "docker", "eventdate": "2024-04-21T12:00:00"},
    # {"id": "14", "content": "hyuuuuuu", "eventdate": "2024-04-23T02:00:00"},
]

for doc in data:
    es.index(index=index_name, body=doc)

print("데이터가 성공적으로 색인되었습니다.")
