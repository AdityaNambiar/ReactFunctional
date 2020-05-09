pipeline{
    agent{
        label "node"
    }
    stages {
        stage('Checkout') {
            checkout scm
        }
        stage('Environment') {
            sh 'docker -v'
        }
        stage('Build Docker test'){
            sh 'docker build -t react-test -f Dockerfile.test --no-cache . '
        }
        stage('Docker test'){
            sh 'docker run --rm react-test'
        }
        stage('Clean Docker test'){
            sh 'docker rmi react-test'
        }
        stage('Deploy'){
            sh 'docker build -t react-app --no-cache .'
            sh 'docker tag react-app localhost:5000/react-app'
            sh 'docker push localhost:5000/react-app'
            sh 'docker rmi -f react-app localhost:5000/react-app'
        }
    }
}