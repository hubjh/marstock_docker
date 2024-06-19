import pymysql
import time

class Mysql:
    def __init__(self, host, user, password, database):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.conn = None

    def connect(self):
        if not self.conn:
            self.conn = pymysql.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.database
            )
    
    def close(self):
        if self.conn:
            self.conn.close()
            self.conn = None

    def execute_query(self, query):
        if not query:
            return
        
        self.connect()
        cursor = self.conn.cursor()

        try:
            cursor.execute(query)
            rows = cursor.fetchall()
            return rows
        except Exception as e:
            print(f"Error executing select query: {e}")
        finally:
            cursor.close()
            self.close()

    def execute_update(self, query):
        if not query:
            return
        
        self.connect()
        cursor = self.conn.cursor()

        try:
            cursor.execute(query)
            self.conn.commit()
        except Exception as e:
            print(f"Error executing update query: {e}")
            self.conn.rollback()
        finally:
            cursor.close()
            self.close()

    def execute_queries(self, queries):
        if not queries:
            return
        for idx, query in enumerate(queries):
            self.execute_update(query)
            # 10번째 반복일 때만 10초 쉬기
            if (idx + 1) % 10 == 0:
                time.sleep(10)
            else:
                time.sleep(0.1)


    def delete_records(self, ids):
        if not ids:
            return

        id_list = ', '.join(str(id) for id in ids)
        delete_query = f"DELETE FROM example_table WHERE id IN ({id_list})"
        self.execute_query(delete_query)

    def execute_sort_query(self, multi_search_results):
        cnt_maintain = 0
        cnt_update = 0
        cnt_delete = 0

        delete_ids = []
        update_queries = []

        result_summary = {
            'total': len(multi_search_results),
            'MAINTAIN': cnt_maintain,
            'UPDATE': cnt_update,
            'DELETE': cnt_delete
        }

        for idx, (key, values) in enumerate(multi_search_results.items()):
            # print(key, values)
            tb_es_id, es_id = values[0], values[1]

            # 10번째 반복일 때만 10초 쉬기
            if (idx + 1) % 10 == 0:
                time.sleep(10)
            else:
                time.sleep(0.1)

            if not es_id:
                cnt_delete += 1
                delete_ids.append(key)
                continue 

            if tb_es_id != es_id:
                cnt_update += 1
                update_queries.append(f"UPDATE example_table SET ES_ID = {es_id} WHERE id = {key}")
                continue
            cnt_maintain += 1

        # self.delete_records(delete_ids)
        # time.sleep(10)
        # self.execute_queries(update_queries)

        result_summary['MAINTAIN'] = cnt_maintain
        result_summary['UPDATE'] = cnt_update
        result_summary['DELETE'] = cnt_delete

        return result_summary
        

if __name__ == '__main__':
    mysql = Mysql(host='localhost', user='marstock', password='1234', database='marstock')
    rows = mysql.execute_query("SELECT * FROM example_table")
    for row in rows:
        print(row)


# import jaydebeapi
# import time

# class Oracle:
#     def __init__(self, host, port, sid, user, password):
#         self.host = host
#         self.port = port
#         self.sid = sid
#         self.user = user
#         self.password = password
#         self.conn = None

#     def connect(self):
#         if not self.conn:
#             conn_str = f"jdbc:oracle:thin:@{self.host}:{self.port}/{self.sid}"
#             self.conn = jaydebeapi.connect("oracle.jdbc.driver.OracleDriver", conn_str, [self.user, self.password])

#     def close(self):
#         if self.conn:
#             self.conn.close()
#             self.conn = None

    # def execute_query(self, select_query):
    #     self.connect()
    #     cursor = self.conn.cursor()

    #     try:
    #         cursor.execute(select_query)
    #         rows = cursor.fetchall()
    #         return rows
    #     finally:
    #         cursor.close()
    #         self.close()

    # def execute_update(self, update_query):
    #     self.connect()
    #     cursor = self.conn.cursor()

    #     try:
    #         cursor.execute(update_query)
    #         self.conn.commit()
    #     finally:
    #         cursor.close()
    #         self.close()

#     def execute_sort_query(self, multi_search_results):
#         cnt_maintain = 0
#         cnt_update = 0
#         cnt_delete = 0

#         delete_ids = []
#         update_queries = []

#         result_summary = {
#             'total': len(multi_search_results),
#             'MAINTAIN': cnt_maintain,
#             'UPDATE': cnt_update,
#             'DELETE': cnt_delete
#         }

#         for idx, (key, values) in enumerate(multi_search_results.items()):
#             tb_es_id, es_id = values[0], values[1]

#             # 10번째 반복일 때만 10초 쉬기
#             if (idx + 1) % 10 == 0:
#                 time.sleep(10)
#             else:
#                 time.sleep(0.1)

#             if not es_id:
#                 cnt_delete += 1
#                 delete_ids.append(key)
#                 continue 

#             if tb_es_id != es_id:
#                 cnt_update += 1
#                 update_queries.append(f"UPDATE example_table SET ES_ID = {es_id} WHERE id = {key}")
#                 continue
#             cnt_maintain += 1

#         self.delete_records(delete_ids)
#         self.execute_queries(update_queries)

#         result_summary['MAINTAIN'] = cnt_maintain
#         result_summary['UPDATE'] = cnt_update
#         result_summary['DELETE'] = cnt_delete

#         return result_summary

#     def delete_records(self, ids):
#         if not ids:
#             return

#         id_list = ', '.join(str(id) for id in ids)
#         delete_query = f"DELETE FROM example_table WHERE id IN ({id_list})"
#         self.execute_update(delete_query)

#     def execute_queries(self, queries):
#         if not queries:
#             return

#         for query in queries:
#             self.execute_update(query)

# if __name__ == '__main__':
#     oracle = Oracle(host='localhost', port='1521', sid='YOUR_SID', user='YOUR_USERNAME', password='YOUR_PASSWORD')
#     rows = oracle.execute_query("SELECT * FROM example_table")
#     for row in rows:
#         print(row)
