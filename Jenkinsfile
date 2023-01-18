pipeline {
    agent any
    when {
        branch 'master'
    }
    stages {
        stage('Build') {
            steps {
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