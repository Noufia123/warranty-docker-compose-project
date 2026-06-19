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

    Whenever code is pushed to the main branch, GitHub Actions automatically starts the CI/CD pipeline.

1. The workflow checks out the source code.
2. AWS credentials are configured.
3. Docker images for frontend and backend are built.
4. Images are tagged using the Git commit SHA.
5. Images are pushed to Amazon ECR.
6. The deploy job connects to EC2 using SSH.
7. Docker Compose pulls the latest images.
8. Containers are restarted and the application becomes live.

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