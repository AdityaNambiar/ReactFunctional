pipeline {
    agent any
    environment {
        CI = 'true'	
    }
    tools {
	nodejs "node14"
    }
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
	stage ('Deploy to Private Docker Registry'){
		steps {
			sh 'docker build -t 192.168.1.101:7009/reactapp:0.1 -f Dockerfile .'
		}
		post { 
		  success { 
		    sh 'docker push 192.168.1.101:7009/reactapp:0.1'
		  }
	    	}
	}
    }
}
