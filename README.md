1.**Warranty Purchase Order Management System**
**Project Overview**
 This project is a containerized Warranty Product Order Management System deployed on AWS using DevOps practices. The application consists of a frontend, backend, and PostgreSQL database, with infrastructure provisioned using Terraform and deployments automated through GitHub Actions.


**3.How to Run Locally**

**Start Application**
docker compose up -d

**Verify Containers**
docker ps

**Stop Application**
docker compose down

**4.How the Pipeline Works**

Whenever code is pushed to the main branch,Github Actions automatically start the CI/CD pipeline

1. The workflow checks out the source code.
2. AWS credentials are configured.
3. Docker images for frontend and backend are built.
4. Images are tagged using the Git commit SHA.
5. Images are pushed to Amazon ECR.
6. The deploy job connects to EC2 using SSH.
7. Docker Compose pulls the latest images.
8. Containers are restarted and the application becomes live.

**5. How to Debug a Failed Pipeline**

If the pipeline fails:

1. Open **GitHub → Actions**.
2. Select the failed workflow run.
3. Open the failed job and review the logs.
4. Verify AWS credentials and GitHub Secrets are configured correctly.
5. Confirm Docker images were successfully pushed to Amazon ECR.
6. Verify EC2 connectivity using SSH.
7. Check the running containers on EC2:


docker ps -a
**Check application logs:**
docker compose logs
**Verify container status:**
docker compose ps
**manually pull the latest images and restart the application:**
docker compose pull
docker compose up -d

**Verify ECR images:**
aws ecr list-images --repository-name frontend-repo

aws ecr list-images --repository-name backend-repo

**6.Live Application URL**

**Frontend:**

http://43.204.218.132

**Backend:**

http://43.204.218.132:8081