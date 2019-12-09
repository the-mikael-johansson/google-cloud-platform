# Author: Mikael Johansson, https://www.linkedin.com/in/the-mikael-johansson/

.PHONY: clean build test run

clean:
	mvn clean

build:
	mvn clean package -DskipTests

test:
	mvn clean test

run:
	java -jar target/microservice-0.0.1-SNAPSHOT.jar
