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
        input(message: 'Do we want to deploy this build? ', id: '1', ok: 'Yes')
        sh 'pwd; ls; '
      }
    }

  }
}