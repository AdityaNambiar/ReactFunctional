pipeline {
    agent {
        docker {
            image 'node:14.0.0-alpine3.11'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}