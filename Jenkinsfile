pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Copy configuration files'
                sh 'cp /opt/project/BitCodersNext/.env /var/lib/jenkins/workspace/BitCodersNext/.env'
                echo 'Building..'
                catchError {
                    script {
                        sh "docker build ."
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                catchError {
                    script {
                        sh "docker-compose up --build -d"
                    }
                }
            }
        }
    }
}