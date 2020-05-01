pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh './setupNode.sh && npm run build'
            }
        }
    }
}