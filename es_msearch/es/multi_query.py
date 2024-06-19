class MultiQuery:
    def __init__(self):
        pass
    def create(self, index, keywords):
        queries = []
        for keyword in keywords:
            queries.append(({"index": index}, {"query": {"bool": {"must": [
                {"query_string": {"default_field": "content","query": f"*{keyword}*"}}]}},
                "sort": [{"_score": {"order": "desc"}}, {"eventdate": {"order": "asc"}}],"from": 0,"size": 1}))
        return queries


    #      query = {
    #     "query": {
    #         "bool": {
    #             "must": [
    #                 {
    #                     "term": {
    #                         "_id": document_id
    #                     }
    #                 },
    #                 {
    #                     "query_string": {
    #                         "default_field": "content",
    #                         "query": f"*{keyword}*"
    #                     }
    #                 }
    #             ]
    #         }
    #     },
    #     "from": 0,
    #     "size": 1
    # }