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

try:
    # 테이블 생성 쿼리 실행 전에 테이블 존재 여부 확인
    table_exists_query = "SHOW TABLES LIKE 'example_table'"
    cursor.execute(table_exists_query)
    table_exists = cursor.fetchone()

    # 테이블이 존재하지 않을 때만 테이블 생성
    if not table_exists:
        create_table_query = """
        CREATE TABLE example_table (
            id INT AUTO_INCREMENT PRIMARY KEY,
            ES_ID VARCHAR(36),
            KEYWORD VARCHAR(255) NOT NULL
        )
        """
        cursor.execute(create_table_query)
        print("테이블이 성공적으로 생성되었습니다.")
    else:
        print("테이블이 이미 존재합니다.")

    # 데이터 삽입 쿼리 실행 (10개의 데이터)
    insert_query = """
    INSERT INTO example_table (ES_ID, KEYWORD) VALUES
    (1, '가나'), 
    (2, '파하'),
    (3, '콜릿'),
    (4, '아자'),
    (5, '테이너'),
    (6, '돜'),
    (7, '유후'),
    (8, 'de'),
    (9, 'jkl'),
    (10, 'ab'),
    (3, '가나다'),
    (15, '이너'),
    (11, '이냐'),
    (1, '마바샤'),
    (4, '아자챠')
    """
    #                         total:15   보류:3  유지:7  UPDATE:2  DELETE:3
    # T T  가나    중복  보류
    # T T  파하         유지
    # T T  콜릿         유지
    # T T  아자    중복  보류
    # T T  테이너        유지
    # T T  돜           유지
    # T T  유후          유지
    # T T  de           유지
    # T T  jkl          유지
    # T T  ab     중복  보류
    # F T  가나다       UPDATE
    # F T  이너         UPDATE
    # F F  이냐         DELETE
    # T F  마바샤        DELETE
    # T F  아자챠        DELETE
    cursor.execute(insert_query)

    # 삽입 결과 확인
    print(cursor.rowcount, "레코드가 성공적으로 삽입되었습니다.")

    # 변경사항을 커밋하여 데이터베이스에 반영
    conn.commit()

except Exception as e:
    print("쿼리 실행 중 오류 발생:", e)
    # 변경사항 롤백
    conn.rollback()

finally:
    # 연결 닫기
    cursor.close()
    conn.close()
