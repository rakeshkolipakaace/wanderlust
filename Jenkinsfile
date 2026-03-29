pipeline{
    agent any

    environment{
        SONAR_HOME=tool "Sonar"
      // Jenkins credential ID
    }
    stages{
        stage("sonar scan"){
            steps{
                withSonarQubeEnv('SonarQube') {
                    sh "${SONAR_HOME}/bin/sonar-scanner  -Dsonar.projectName=wanderlust -Dsonar.projectKey=wanderlust"
                }
            }
        }
        stage("Owasp Dependency Check"){
            steps{
             dependencyCheck additionalArguments: '--scan ./', odcInstallation: 'Owas'
             dependencyCheckPublisher pattern: '**/dependency-check-report.xml'

            }
        }
        stage("Sonar Quality Gate Scan"){
            steps{
                 timeout(time:2, unit: "MINUTES"){
                    waitForQualityGate abortPipeline: false
                 }
            }
        }
         stage("Trivy File System Scan"){
            steps{
              sh "trivy fs --format table -o trivy-fs-report.html ."
            }
        }

        stage("deploy on docker"){
            steps{
                sh "docker compose up -d"
            }
        }
        
    }

    post{
        success{
              echo "pipeline done successfully"
        }
        failure{
            echo "pipeline fails"
        }
    }
}
