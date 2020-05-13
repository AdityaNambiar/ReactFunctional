pipeline {
    agent {
	node {
	        customWorkspace '.'
	}
    }
    environment {
        CI = 'true'
    }
    tools {nodejs "node"}
    stages {
        stage ('Environment') {
            steps {
                sh 'node -v'
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build'){
            steps {
                sh 'npm run build'
            }
        }
    }
}
