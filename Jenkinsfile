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
	stage ('Deploy to Docker Hub'){
		steps {
			sh 'docker build -t reactapp:0.1 -f Dockerfile.deploy .'
		}
		post { 
		  success { 
		    sh 'docker tag projName:0.1 devopschain/projName:0.1'
		    sh 'docker push devopschain/projName:0.1'
		  }
	    	}
	}
    }
}
