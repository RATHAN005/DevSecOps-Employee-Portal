<div align="center">

# 🚀 DevSecOps Employee Portal

### Enterprise Grade DevSecOps + GitOps Platform

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&duration=3000&pause=1000&center=true&vCenter=true&width=800&lines=React+%7C+Node.js+%7C+MongoDB;Docker+%7C+Kubernetes+%7C+ArgoCD;GitHub+Actions+%7C+Trivy+%7C+Vault;Prometheus+%7C+Grafana+%7C+GitOps;Production+Grade+DevSecOps+Platform" />

<br>

![GitHub last commit](https://img.shields.io/github/last-commit/RATHAN005/DevSecOps-Employee-Portal)
![GitHub repo size](https://img.shields.io/github/repo-size/RATHAN005/DevSecOps-Employee-Portal)
![GitHub stars](https://img.shields.io/github/stars/RATHAN005/DevSecOps-Employee-Portal)
![GitHub forks](https://img.shields.io/github/forks/RATHAN005/DevSecOps-Employee-Portal)

![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker\&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes\&logoColor=white)
![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?logo=argo\&logoColor=white)
![Vault](https://img.shields.io/badge/Vault-000000?logo=vault\&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus\&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?logo=grafana\&logoColor=white)

</div>

---

# 🌟 Project Overview

DevSecOps Employee Portal is a production-grade Employee Management System designed to demonstrate a complete modern software delivery lifecycle.

The platform implements:

* Secure CI/CD pipelines
* Containerization
* Vulnerability scanning
* GitOps deployment
* Kubernetes orchestration
* Secrets management
* Infrastructure monitoring
* Application observability

---

# 🎬 Project Flow

```text
Developer Push
      │
      ▼
GitHub Repository
      │
      ▼
GitHub Actions
      │
      ▼
Docker Build
      │
      ▼
Trivy Security Scan
      │
      ▼
GHCR Registry
      │
      ▼
ArgoCD GitOps
      │
      ▼
Kubernetes Cluster
      │
 ┌────┼────┐
 ▼    ▼    ▼
Frontend Backend MongoDB
      │
      ▼
HashiCorp Vault
      │
      ▼
Prometheus
      │
      ▼
Grafana
```

---

# 🏗️ Architecture Diagram

```mermaid
graph TD

A[Developer] --> B[GitHub]

B --> C[GitHub Actions]

C --> D[Docker Build]

D --> E[Trivy Scan]

E --> F[GHCR]

F --> G[ArgoCD]

G --> H[Kubernetes]

H --> I[Frontend Pods]

H --> J[Backend Pods]

H --> K[MongoDB]

J --> L[Vault]

H --> M[Prometheus]

M --> N[Grafana]
```

---

# ⚡ Features

## Employee Management

* Employee CRUD Operations
* Search & Filtering
* Role-Based Access Control
* Profile Management
* Attendance Analytics

## Security

* JWT Authentication
* Password Hashing
* Helmet Security Headers
* Rate Limiting
* Trivy Vulnerability Scanning
* HashiCorp Vault Integration

## DevOps

* Dockerized Services
* GitHub Actions CI/CD
* GHCR Registry
* Kubernetes Deployments
* GitOps with ArgoCD

## Monitoring

* Prometheus Metrics
* Grafana Dashboards
* Infrastructure Monitoring
* Application Monitoring

---

# 🐳 Docker Implementation

<details>
<summary>View Docker Workflow</summary>

```text
Backend Source
      │
      ▼
Dockerfile
      │
      ▼
Docker Image
      │
      ▼
GHCR Registry
      │
      ▼
Kubernetes Deployment
```

</details>

---

# ⚙️ CI/CD Pipeline

```yaml
Push
  ↓
Checkout
  ↓
Install Dependencies
  ↓
Run Tests
  ↓
Build Images
  ↓
Trivy Scan
  ↓
Push GHCR
```

---

# ☸️ Kubernetes Deployment

## Namespace

```yaml
employee-portal
```

## Services

* Frontend Service
* Backend Service
* MongoDB Service

## Deployments

* Frontend Deployment
* Backend Deployment
* MongoDB Deployment

---

# 🔄 GitOps Workflow

```text
Developer
   │
git push
   │
   ▼
GitHub
   │
   ▼
ArgoCD
   │
Auto Sync
   │
   ▼
Kubernetes
```

### Features

✅ Auto Sync

✅ Self Heal

✅ Drift Detection

✅ Automated Rollback

---

# 🔐 HashiCorp Vault

Secrets stored securely:

```text
MONGODB_URI
JWT_SECRET
API_KEYS
```

Benefits:

* No hardcoded credentials
* Centralized secret management
* Secure secret rotation

---

# 📈 Prometheus Metrics

Collected Metrics:

```text
CPU Usage
Memory Usage
Pod Health
Network Usage
Node Metrics
Custom Backend Metrics
```

Custom Metrics:

```text
employee_portal_http_requests_total

employee_portal_http_request_duration_seconds
```

---

# 📊 Grafana Dashboards

### Kubernetes Monitoring

* Cluster Health
* Resource Utilization
* Pod Status

### Infrastructure Monitoring

* CPU
* Memory
* Disk Usage
* Network Traffic

### Application Monitoring

* Request Count
* Response Time
* Error Rate

---

# 📂 Repository Structure

```text
DevSecOps-Employee-Portal
│
├── Frontend
├── BackEnd
├── k8s
├── .github/workflows
├── Dockerfiles
├── Vault
├── Monitoring
└── README.md
```

---

# 🚀 Deployment Guide

## Clone Repository

```bash
git clone https://github.com/RATHAN005/DevSecOps-Employee-Portal.git
```

## Run Docker

```bash
docker compose up -d
```

## Deploy Kubernetes

```bash
kubectl apply -f k8s/
```

## Verify

```bash
kubectl get pods -n employee-portal
```

---

# 📸 Project Screenshots

### Employee Dashboard

(Add Screenshot)

### GitHub Actions Pipeline

(Add Screenshot)

### ArgoCD Application

(Add Screenshot)

### Grafana Dashboard

(Add Screenshot)

### Kubernetes Pods

(Add Screenshot)

---

# 🏆 Achievements

✅ End-to-End DevSecOps Platform

✅ GitOps Deployment Strategy

✅ Enterprise Security Practices

✅ Kubernetes Orchestration

✅ Secrets Management

✅ Monitoring & Observability

✅ Production Ready CI/CD

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

Built with ❤️ by Rathan K

</div>
