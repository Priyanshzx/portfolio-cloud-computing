# Portfolio Content and Customization Guide

This document is your step-by-step handbook for updating, customizing, and maintaining your AWS Cloud & DevOps portfolio website.

All personal information, project records, skills, and links are centralized in a single configuration file:
👉 **[`src/data/portfolioData.js`](file:///c:/Users/xdpha/OneDrive/Documents/portfolio%20job/src/data/portfolioData.js)**

---

## 1. Resume PDF Status: Active & Linked ✅

Your verified resume has been generated and placed at:
👉 **`public/resume.pdf`**

The navbar button is already activated (`hasResumeFile: true`) and links directly to `/resume.pdf`.

To update the resume in the future:
1. Replace `public/resume.pdf` with your new PDF export (or run `node scripts/generate-resume.js` to regenerate it).
2. The navbar will automatically serve the updated PDF.

---

## 2. Where to Change Personal Information, Bio, and Education

Open [`src/data/portfolioData.js`](file:///c:/Users/xdpha/OneDrive/Documents/portfolio%20job/src/data/portfolioData.js):
- **`name`**: Full name (`"Priyansh Yadav"`).
- **`headline`**: Main hero headline (`"Building Secure and Scalable Solutions on AWS."`).
- **`subtext`**: Supporting hero text highlighting serverless pipelines and ECS Fargate.
- **`aboutText`**: Bio paragraph with United University BCA and cloud focus.
- **`location`**: Current location (`"Jaunpur / Prayagraj, Uttar Pradesh, India"`).
- **`phone`**: Contact phone (`"+91-8738831723"`).
- **`education`**: Array containing United University (CGPA: 7.26/10) and 12th PCM.
- **`softSkills`**: Communication, Problem Solving, Adaptability, etc.

---

## 3. Real Projects from Resume

The portfolio currently showcases your real projects:
1. **Event-Driven Image Labeling Pipeline**: AWS S3, SQS (with DLQ and partial-batch-failure handling), Lambda, Rekognition, DynamoDB, API Gateway, and SAM.
2. **Containerized Task Tracker API**: FastAPI, Docker multi-stage non-root build, ECS Fargate, ALB, ECR, VPC, DynamoDB, CloudWatch, and SNS auto-scaling.
3. **Image Labels Generator**: Python, AWS S3, Amazon Rekognition DetectLabels API, Boto3, Pillow, and IAM.

### Where to Replace Repository Placeholders:
In `src/data/portfolioData.js`, replace:
```javascript
githubUrl: "https://github.com/priyanshzx/REPLACE_WITH_PROJECT_REPOSITORY"
```
with your actual GitHub repo URLs (e.g., `https://github.com/priyanshzx/event-driven-image-labeling`).

---

## 4. Real Certifications & Training

Configured in `src/data/portfolioData.js`:
- AWS Cloud Practitioner Essentials
- AWS Cloud Quest: Cloud Practitioner - Training Badge
- AWS Cloud Essentials Training Badge
- Introduction to Generative AI - Art of the Possible
- Fundamentals of Machine Learning and AI
- Essentials of Prompt Engineering

To add your Credly or AWS Skill Builder verification URLs:
Replace `verificationUrl: "#"` with your direct badge URL (e.g., `https://www.credly.com/badges/...`).

---

## 5. Security and Link Safety Rules

> [!CAUTION]
> **Zero Secrets Policy**:
> - NEVER commit `.env` files with AWS Access Keys (`AKIA...`), Secret Access Keys, or session tokens.
> - NEVER hardcode database passwords, private SSH keys (`.pem` / `.id_rsa`), or private VPC CIDR security tokens into frontend code.
> - Always use AWS IAM Roles and Secrets Manager / SSM Parameter Store for server credentials.
