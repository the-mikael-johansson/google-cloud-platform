# Quick start - Setting up development environment for Java Spring Boot

# Setup development environment
* Download and install [Java JDK 1.8](https://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html)
* Configure Java environment variables. JAVA_HOME must contain the path to java, and you should add %JAVA_HOME%\bin to PATH.
Windows example: JAVA_HOME=C:\Program Files (x86)\Java\jdk1.8.0_192
* Downlaod and install maven: https://maven.apache.org/download.cgi
* Download and install [Maven](https://maven.apache.org/download.cgi).
* Add the Maven's bin directory to the PATH environment variable. 
* Restart any terminal or IDE in order to get the updated PATH.

# Additional Setup
* IntelliJ: Install Lombok plugin
  * Settings > Plugins, search for Lombok4
  * Settings > Compiler > Annotation Processors, tick  "Enable annotation processing"

# Setup Cloud SQL
* https://cloud.google.com/sql/docs/mysql/connect-external-app#java
* Download and install GCP SDK: https://cloud.google.com/sdk/docs/quickstart-macos
* gcloud auth login
* Create Service account with Cloud SQL access
  * Download service account credentials as JSON file

# Generate a new skeleton
Generate your own Spring Boot application from [Spring.io](https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.2.2.RELEASE&packaging=jar&jvmVersion=1.8&groupId=com.example&artifactId=microservice&name=microservice&description=Demo%20project%20for%20Spring%20Boot&packageName=com.example.microservice&dependencies=web)

# License
There is no license. Please enjoy!

Best regards Mikael, https://www.linkedin.com/in/the-mikael-johansson/