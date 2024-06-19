from mysql.mysql import Mysql
from es.multi_search import MultiSearch

mysql = Mysql(host='localhost', user='marstock', password='1234', database='marstock')
rows = mysql.execute_query("SELECT id, ES_ID, KEYWORD FROM example_table")  # 여기에 조건문으로 년도별 데이터로 가져오기

multi_search = MultiSearch(index="test_index", rows=rows, chunk_size=500, delay=10)

# db에 날릴 쿼리를 만들기 위한 데이터셋
ms_results = multi_search.mapping()

result_summary = mysql.execute_sort_query(ms_results)
print(f'''
total : {result_summary['total']}
MAINTAIN : {result_summary['MAINTAIN']}
UPDATE : {result_summary['UPDATE']}
DELETE : {result_summary['DELETE']}
''')

# 35 ('1', '1')     유지
# 36 ('2', '2')     유지
# 37 ('3', '3')     유지
# 38 ('4', '2')     업데이트
# 39 ('5', '5')     유지
# 40 ('6', '6')     유지
# 41 ('7', '7')     유지
# 42 ('8', '8')     유지
# 43 ('9', '9')     유지
# 44 ('10', '8')    업데이트
# 45 ('3', '1')     업데이트
# 46 ('15', '5')    업데이트
# 47 ('11', None)   삭제
# 48 ('1', None)    삭제
# 49 ('4', None)    삭제

# total : 15
# MAINTAIN : 8
# UPDATE : 4
# DELETE : 3