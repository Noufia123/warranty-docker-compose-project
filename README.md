1.**Warranty Purchase Order Management System**
**Project Overview**
 This project is a containerized Warranty Product Order Management System deployed on AWS using DevOps practices. The application consists of a frontend, backend, and PostgreSQL database, with infrastructure provisioned using Terraform and deployments automated through GitHub Actions.


**2.Architecture Diagram**


Developer Pushes Code
          ↓
GitHub Actions Triggered
          ↓ 
Checkout Repository 
          ↓ 
Configure AWS Credentials
          ↓ 
Login to ECR 
          ↓
Build Frontend Image 
          ↓ 
Build Backend Image 
          ↓ 
Tag Images with Commit SHA
          ↓
 Push Images to Amazon ECR
          ↓
SSH Into EC2
          ↓ 
Login to ECR From EC2 
          ↓
Pull Latest Images 
          ↓ 
Docker Compose Up
          ↓
Updated Application Becomes Live

**3.How to Run Locally**

**Start Application**
docker compose up -d

**Verify Containers**
docker ps

**Stop Application**
docker compose down

**4.How the Pipeline Works**

    Whenever code is pushed to the main branch, GitHub Actions automatically starts the pipeline. The workflow builds Docker images for both frontend and backend applications, tags them using the Git commit SHA, and pushes them to Amazon ECR. After the images are successfully uploaded, a deployment job connects to the EC2 server using SSH, pulls the latest images from ECR, and restarts the application using Docker Compose. This ensures that the latest code changes are automatically deployed without any manual intervention.

**5.How to Debug a Failed Pipeline**

Open GitHub → Actions.
Select the failed workflow run.
Check the failed job logs.
Verify AWS credentials and GitHub Secrets.
Confirm Docker images were pushed to ECR.
Verify EC2 connectivity using SSH.
**Check EC2 logs:**
docker ps -a
docker compose logs
docker compose ps

**Verify ECR images:**
aws ecr list-images --repository-name frontend-repo

aws ecr list-images --repository-name backend-repo

**6.Live Application URL**

**Frontend:**

http://43.204.218.132

**Backend:**

http://43.204.218.132:8081