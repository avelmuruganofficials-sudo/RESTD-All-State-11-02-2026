pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    options {
        timestamps()
        timeout(time: 1, unit: 'HOURS')
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/avelmuruganofficials-sudo/RESTD-All-State-11-02-2026.git'
            }
        }

        stage('Verify Node & NPM') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                    bat 'npx playwright test --list'
                    bat 'npx playwright test --reporter=junit'
            }
        }
    }

    post {
        always {
            junit 'test-results/results.xml'   // 👈 ADD THIS
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
