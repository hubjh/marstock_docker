# spring-boot
FROM ubuntu:22.04

# 작업 디렉토리 설정
WORKDIR /app

# 타임존 설정
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 소스 코드 복사
COPY . .

