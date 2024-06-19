from elasticsearch import Elasticsearch
from es.multi_query import MultiQuery
import time

class MultiSearch:
    def __init__(self, index, rows, chunk_size, delay=1):
        multi_query = MultiQuery()
        tb_ids, tb_es_ids, keywords = [], [], []
        for row in rows:
            tb_ids.append(row[0])
            tb_es_ids.append(row[1])
            keywords.append(row[2])
        self.chunk_size = chunk_size
        self.delay = delay
        self.tb_ids = tb_ids
        self.tb_es_ids = tb_es_ids
        self.queries = multi_query.create(index, keywords)

    def chunk_query(self):
        return [self.queries[i:i + self.chunk_size] for i in range(0, len(self.queries), self.chunk_size)]

    
    def mapping(self):
        es = Elasticsearch(["http://localhost:9200"])
        chunk_queries = self.chunk_query()
        tb_id_mapping = {}
        
        for idx, tuple_lst in enumerate(chunk_queries):
            flat_lst = [item for sublst in tuple_lst for item in sublst]
            response = es.msearch(body=flat_lst)
            for sub_idx, result in enumerate(response["responses"]):
                # print(result)
                global_idx = idx * self.chunk_size + sub_idx
                if not result['hits']['hits']:
                    print(self.tb_ids[global_idx])
                    tb_id_mapping[self.tb_ids[global_idx]] = (self.tb_es_ids[global_idx], None)
                    continue
                es_id = result['hits']['hits'][0]['_source']['id']
                tb_id_mapping[self.tb_ids[global_idx]] = (self.tb_es_ids[global_idx], es_id)

            time.sleep(self.delay)

        return tb_id_mapping