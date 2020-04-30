pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh './setupNode.sh'
                sh 'npm run build'
            }
        }
    }
}