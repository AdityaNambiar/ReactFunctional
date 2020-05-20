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
		sh 'yarn config set ignore-engines true'
                sh 'yarn install'
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
			sh 'docker build -t 192.168.43.160:7009/movielibrary:movielibrary-frontend -f Dockerfile .'
		}
		post { 
		  success { 
		    sh 'docker push 192.168.43.160:7009/movielibrary:movielibrary-frontend'
		  }
	    	}
	}
    }
}
