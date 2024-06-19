import pymysql

# MySQL 연결 설정
conn = pymysql.connect(
    host='localhost',
    user='marstock',
    password='1234',
    database='marstock'
)

# 커서 생성
cursor = conn.cursor()

# 한 번에 가져올 행 수
chunk_size = 4

# 시작점 인덱스
start_index = 0

try:
    while True:
        # 쿼리 실행
        select_query = "SELECT * FROM example_table LIMIT %s OFFSET %s"
        cursor.execute(select_query, (chunk_size, start_index))

        # 결과 가져오기
        rows = cursor.fetchall()

        # 가져온 행이 없으면 반복 종료
        if not rows:
            break

        # 가져온 데이터 처리
        for row in rows:
            # 여기에 데이터 처리 코드 작성
            print(row)  # 예시로 행 출력

        # 시작 인덱스 업데이트
        start_index += chunk_size
        # print("!!!")

except Exception as e:
    print("쿼리 실행 중 오류 발생:", e)

finally:
    # 연결 닫기
    cursor.close()
    conn.close()
