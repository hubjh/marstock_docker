# flask
FROM ubuntu:22.04

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 업데이트 및 필요한 의존성 설치
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    python3-pip \
    tzdata \
    && rm -rf /var/lib/apt/lists/*

# 타임존 설정
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 필요한 Python 라이브러리 설치
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# Gunicorn 설치
RUN pip3 install gunicorn

# 소스 코드 복사
COPY . .

# 컨테이너 실행 시 실행될 명령 설정
# CMD ["python3", "app.py"]

# Gunicorn을 사용하여 Flask 애플리케이션 실행
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]