from elasticsearch import Elasticsearch

# Elasticsearch 클라이언트 생성
es = Elasticsearch(["http://localhost:9200"])

# index 이름
index_name = "test_index"  

# 인덱스의 모든 문서를 삭제
query = {"query": {"match_all": {}}}
es.delete_by_query(index=index_name, body=query)