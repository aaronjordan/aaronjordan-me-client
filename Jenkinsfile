pipeline {
  agent any
  stages {
    stage('initialize') {
      steps {
        sh 'npm install'
      }
    }

    stage('build') {
      steps {
        sh '''echo "running build";



 npm run build'''
      }
    }

    stage('deploy') {
      steps {
        echo 'ready to deploy'
      }
    }

  }
}