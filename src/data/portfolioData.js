export const personalInfo = {
  name: "Priyansh Yadav",
  headline: "Building Secure and Scalable Solutions on AWS.",
  subtext: "Cloud Computing enthusiast and final-year BCA student with hands-on AWS experience — event-driven serverless pipelines (Lambda, SQS, DynamoDB) and containerized microservices on ECS Fargate with auto-scaling and monitoring.",
  aboutText: "I am Priyansh Yadav, a BCA student at United University pursuing a career in Cloud Computing and DevOps. My focus is on AWS infrastructure, event-driven serverless pipelines, containerized microservices on ECS Fargate, Infrastructure as Code (SAM/CloudFormation), IAM least privilege, and proactive CloudWatch monitoring. I enjoy turning application ideas into secure, reliable, and deployable cloud solutions.",
  role: "Aspiring AWS Cloud / DevOps Engineer",
  status: "Final-year BCA student (United University)",
  location: "Jaunpur / Prayagraj, Uttar Pradesh, India",
  phone: "+91-8738831723",
  phoneLink: "tel:+918738831723",
  availabilityBadge: "Open to internships, trainee, and entry-level Cloud/DevOps roles.",
  targetRoles: [
    "Cloud Engineer Intern",
    "AWS Cloud Engineer Trainee",
    "Cloud Support Associate",
    "DevOps Intern",
    "Junior Cloud Engineer"
  ],
  education: [
    {
      institution: "United University",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "Sep 2024 – Present",
      grade: "CGPA: 7.26 / 10"
    },
    {
      institution: "Mata Prasad Adarsh Inter College, Jaunpur",
      degree: "12th Standard (PCM - Physics, Chemistry, Mathematics)",
      period: "Apr 2022 – Apr 2023",
      grade: "Completed"
    }
  ],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Adaptability",
    "Resourcefulness",
    "Time Management",
    "Composure",
    "Curiosity"
  ],
  links: {
    github: "https://github.com/priyanshzx",
    linkedin: "https://www.linkedin.com/in/priyansh-yadav-090a97350",
    email: "mailto:yspriyanshu07@gmail.com",
    emailDisplay: "yspriyanshu07@gmail.com",
    resumePath: "/resume.pdf",
    hasResumeFile: true // Resume PDF is generated and placed in /public/resume.pdf
  }
};

export const aboutHighlights = [
  {
    title: "AWS Serverless & Event-Driven",
    description: "Architecting event-driven pipelines using AWS Lambda, SQS (with DLQ and partial batch failure handling), Amazon Rekognition, and DynamoDB."
  },
  {
    title: "Containerization & ECS Fargate",
    description: "Building production-grade Docker containers (multi-stage, non-root) running FastAPI microservices behind Application Load Balancers on ECS Fargate."
  },
  {
    title: "Infrastructure as Code & CI/CD",
    description: "Writing maintainable IaC using AWS SAM and CloudFormation, linted with cfn-lint, and verified via automated unit testing with mocked AWS services."
  }
];

export const skillCategories = [
  {
    category: "AWS Cloud",
    skills: [
      "Lambda",
      "ECS Fargate",
      "S3",
      "DynamoDB",
      "API Gateway",
      "SQS",
      "SNS",
      "VPC",
      "IAM",
      "ALB",
      "ECR",
      "CloudWatch",
      "AWS SAM",
      "CloudFormation",
      "Rekognition",
      "EC2"
    ]
  },
  {
    category: "DevOps and Deployment",
    skills: [
      "Docker (multi-stage, non-root)",
      "Linux (Ubuntu/Amazon Linux)",
      "Git",
      "GitHub",
      "Infrastructure as Code (IaC)",
      "cfn-lint",
      "Unit Testing (Mocked AWS Services)",
      "CI/CD basics",
      "Nginx"
    ]
  },
  {
    category: "Programming and Web",
    skills: [
      "Python",
      "FastAPI",
      "Boto3 (AWS SDK)",
      "JavaScript",
      "SQL",
      "MySQL",
      "HTML",
      "CSS",
      "React basics"
    ]
  },
  {
    category: "Cloud Fundamentals",
    skills: [
      "TCP/IP & DNS",
      "HTTP / HTTPS & TLS",
      "Subnetting & CIDR",
      "Routing & Gateways",
      "Security Groups & NACLs",
      "IAM Least Privilege",
      "CloudWatch Alarms & Dashboards",
      "SNS Alerting"
    ]
  }
];

export const projects = [
  {
    id: "event-driven-image-labeling",
    status: "Completed",
    title: "Event-Driven Image Labeling Pipeline",
    description: "A serverless, event-driven pipeline that automatically detects and labels image content using AWS Rekognition, SQS queuing with DLQ, Lambda, and DynamoDB.",
    services: ["S3", "SQS", "Lambda", "Rekognition", "DynamoDB", "API Gateway", "AWS SAM", "CloudWatch"],
    problem: "Applications processing media uploads can be overwhelmed by sudden bursts, causing timeouts, data loss, and high resource costs if processed synchronously.",
    solution: "Designed and deployed a decoupled event-driven architecture using Amazon SQS with dead-letter queue (DLQ) support and partial-batch-failure handling, streaming to AWS Rekognition and persisting detected labels in DynamoDB.",
    architecture: "Images uploaded to S3 trigger an event that pushes messages to an SQS queue. A worker Lambda polls SQS, calls Amazon Rekognition DetectLabels API, and persists results into DynamoDB. A client REST API via API Gateway and Lambda provides query access.",
    servicesUsedAndWhy: [
      { name: "Amazon S3", reason: "Scalable object storage serving as the intake bucket for raw image uploads with automated event notifications." },
      { name: "Amazon SQS & DLQ", reason: "Buffers ingest traffic, provides backpressure relief, and routes poisoned or failed messages to a dead-letter queue." },
      { name: "AWS Lambda", reason: "Executes batch-processing logic on demand, handling partial-batch failure reporting without paying for idle server time." },
      { name: "Amazon Rekognition", reason: "Deep learning computer vision API used to automatically detect objects, scenes, and confidence scores." },
      { name: "Amazon DynamoDB", reason: "Stores image IDs, detected labels, confidence percentages, and timestamps in a fast NoSQL table." },
      { name: "Amazon API Gateway", reason: "Exposes secure RESTful HTTP endpoints for querying labeling status and results." },
      { name: "AWS SAM / CloudFormation", reason: "Defines all infrastructure as code, validated with cfn-lint, with automated unit testing using mocked AWS services." },
      { name: "Amazon CloudWatch", reason: "Monitors Lambda execution metrics, SQS queue depth, and generates log streams for error diagnosis." }
    ],
    features: [
      "Automated object and scene detection via Amazon Rekognition DetectLabels API.",
      "Decoupled upload ingestion using SQS with DLQ and partial-batch-failure handling.",
      "RESTful query API (API Gateway + Lambda backed by DynamoDB).",
      "Infrastructure as Code with AWS SAM, validated using cfn-lint.",
      "Automated unit test coverage using mocked AWS services (moto/pytest)."
    ],
    security: "Enforces least-privilege IAM execution roles for Lambda; credentials never embedded in client code; isolated DLQ prevents toxic payloads from blocking queues.",
    deployment: "Defined completely in an AWS SAM template, validated with cfn-lint, and deployed via SAM CLI with automated CI unit tests against mocked services.",
    monitoring: "CloudWatch Logs and metrics track Lambda execution duration, invocation count, SQS queue depth, and DLQ errors.",
    cost: "Serverless pay-per-use architecture that naturally scales down to $0 when no images are queued for processing.",
    lessons: "Mastered asynchronous event decoupling with SQS DLQ, partial batch failure handling, and validating IaC with cfn-lint.",
    githubUrl: "https://github.com/priyanshzx/REPLACE_WITH_PROJECT_REPOSITORY",
    demoUrl: "#",
    demoLabel: "Demo coming soon",
    diagramType: "serverless"
  },
  {
    id: "containerized-task-tracker",
    status: "Completed",
    title: "Containerized Task Tracker API",
    description: "A containerized FastAPI microservice deployed on AWS ECS Fargate behind an Application Load Balancer with custom VPC networking and CPU-based auto-scaling.",
    services: ["ECS Fargate", "ALB", "Docker", "FastAPI", "DynamoDB", "ECR", "VPC", "CloudWatch", "SNS"],
    problem: "Production container workloads require automated scaling, zero server OS patching overhead, strict network boundaries, and proactive health alerting.",
    solution: "Built a containerized FastAPI microservice with a multi-stage, non-root Docker build, deployed on ECS Fargate behind an Application Load Balancer with VPC subnet segmentation and CloudWatch SNS alarms.",
    architecture: "Incoming HTTPS traffic hits an Application Load Balancer in public subnets, forwarding to containerized FastAPI tasks running on AWS ECS Fargate in private subnets with DynamoDB as the persistent data tier.",
    servicesUsedAndWhy: [
      { name: "AWS ECS Fargate", reason: "Serverless container compute engine eliminating EC2 host maintenance and providing managed container task lifecycles." },
      { name: "Application Load Balancer (ALB)", reason: "Distributes incoming HTTP/HTTPS traffic across ECS task targets with health-check monitoring." },
      { name: "Docker (Multi-stage)", reason: "Hardened minimal container image using a non-root user for security best practices." },
      { name: "Amazon ECR", reason: "Private container registry storing versioned, scanned Docker images for ECS deployment." },
      { name: "Amazon VPC", reason: "Custom network topology featuring public subnets for ALB and private subnets for ECS tasks." },
      { name: "Amazon DynamoDB", reason: "Low-latency persistent storage for task entities accessed via IAM task roles." },
      { name: "CloudWatch & SNS", reason: "Collects container logs and fires SNS email notifications when CPU utilization exceeds threshold or hosts become unhealthy." }
    ],
    features: [
      "Containerized FastAPI microservice (Docker multi-stage build, non-root user).",
      "Highly available deployment on ECS Fargate behind Application Load Balancer.",
      "Custom VPC networking and security groups designed from scratch.",
      "Least-privilege IAM separation across Task Execution Role and Task Role.",
      "CPU-based auto-scaling and CloudWatch dashboard with SNS alarm notifications.",
      "Test coverage across success, 404, and failure-simulation cases."
    ],
    security: "Docker container runs under a non-root user; security groups restrict task access exclusively to ALB traffic; separate Task Execution Role (ECR pull, logs) and Task Role (DynamoDB permissions).",
    deployment: "Docker image built and pushed to Amazon ECR, task definitions registered, and service deployed behind ALB with rolling zero-downtime updates.",
    monitoring: "CloudWatch metrics dashboard for CPU/Memory utilization, ALB response time, and SNS notifications for unhealthy host events.",
    cost: "Serverless Fargate compute charged per vCPU/GB second; auto-scaling scales task count down during off-peak periods.",
    lessons: "Deepened practical skills in container hardening, multi-stage builds, VPC subnetting/CIDR, ALB target groups, and separating Task Execution vs Task Roles.",
    githubUrl: "https://github.com/priyanshzx/REPLACE_WITH_PROJECT_REPOSITORY",
    demoUrl: "#",
    demoLabel: "Demo coming soon",
    diagramType: "docker"
  },
  {
    id: "image-labels-generator",
    status: "Completed",
    title: "Image Labels Generator",
    description: "A Python tool that analyzes images stored in Amazon S3 using the Amazon Rekognition DetectLabels API, generating object and scene labels with confidence scores.",
    services: ["Python", "Amazon S3", "Amazon Rekognition", "AWS Boto3", "AWS CLI", "AWS IAM", "Pillow"],
    problem: "Developers need an automated, reliable method to analyze image content and extract descriptive metadata without training computer vision models from scratch.",
    solution: "Constructed a Python utility utilizing the Boto3 AWS SDK to stream images from Amazon S3 into Amazon Rekognition, parsing confidence scores and rendering annotated visuals with Pillow.",
    architecture: "The Python application authenticates with AWS via configured credentials or IAM role, streams image binaries from Amazon S3, passes payloads to Amazon Rekognition, and visualizes labeled features.",
    servicesUsedAndWhy: [
      { name: "Amazon Rekognition", reason: "Pre-trained computer vision model providing immediate object and scene detection with high accuracy." },
      { name: "Amazon S3", reason: "Secure cloud object storage holding source images and metadata." },
      { name: "AWS Boto3 SDK", reason: "Official Python SDK providing programmatic control over AWS API calls and error handling." },
      { name: "AWS IAM & CLI", reason: "Secures authentication using scoped credentials and least-privilege policies." },
      { name: "Pillow / Matplotlib", reason: "Client-side image processing library to render bounding boxes and visual labels onto output images." }
    ],
    features: [
      "Programmatic Boto3 integration with Amazon Rekognition DetectLabels API.",
      "Automated retrieval and analysis of images stored in Amazon S3 buckets.",
      "Object and scene labeling with configurable confidence thresholds.",
      "Visual display of labeled images using Pillow and Matplotlib.",
      "Secure AWS CLI configuration and IAM permissions management."
    ],
    security: "Configured granular IAM permissions permitting only `s3:GetObject` on the specific bucket and `rekognition:DetectLabels` API calls.",
    deployment: "Packaged Python application with virtual environment dependencies and modular Boto3 clients.",
    monitoring: "Execution logging, API response latency tracking, and error handling for invalid image formats.",
    cost: "Uses AWS Free Tier allocations for S3 storage and pay-per-image pricing for Amazon Rekognition calls.",
    lessons: "Gained hands-on proficiency in Python AWS SDK (Boto3), IAM permission scoping, and leveraging pre-trained cloud AI services.",
    githubUrl: "https://github.com/priyanshzx/REPLACE_WITH_PROJECT_REPOSITORY",
    demoUrl: "#",
    demoLabel: "Demo coming soon",
    diagramType: "three-tier"
  }
];

export const certifications = [
  {
    id: "aws-cloud-practitioner-essentials",
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS Training & Certification",
    status: "Completed",
    issueDate: "Verified",
    verificationUrl: "#",
    verificationLabel: "Coursework Verified",
    description: "Comprehensive foundation in AWS cloud computing concepts, core services (compute, network, storage, database), security, and pricing."
  },
  {
    id: "aws-cloud-quest",
    title: "AWS Cloud Quest: Cloud Practitioner - Training Badge",
    provider: "AWS Skill Builder",
    status: "Completed",
    issueDate: "Training Badge",
    verificationUrl: "#",
    verificationLabel: "Badge Earned",
    description: "Hands-on role-playing learning solution solving cloud infrastructure challenges inside live AWS sandbox environments."
  },
  {
    id: "aws-cloud-essentials-badge",
    title: "AWS Cloud Essentials Training Badge",
    provider: "Amazon Web Services",
    status: "Completed",
    issueDate: "Training Badge",
    verificationUrl: "#",
    verificationLabel: "Badge Earned",
    description: "Validation of fundamental AWS architectural principles, IAM security fundamentals, and global cloud infrastructure."
  },
  {
    id: "intro-generative-ai",
    title: "Introduction to Generative AI - Art of the Possible",
    provider: "AWS Training & Certification",
    status: "Completed",
    issueDate: "Completed",
    verificationUrl: "#",
    verificationLabel: "Course Completed",
    description: "Foundational concepts of Generative AI, foundation models, potential use cases, and responsible AI implementation."
  },
  {
    id: "fundamentals-ml-ai",
    title: "Fundamentals of Machine Learning and AI",
    provider: "Amazon Web Services",
    status: "Completed",
    issueDate: "Completed",
    verificationUrl: "#",
    verificationLabel: "Course Completed",
    description: "Core machine learning workflows, model training paradigms, data preprocessing, and managed AWS AI/ML services."
  },
  {
    id: "essentials-prompt-engineering",
    title: "Essentials of Prompt Engineering",
    provider: "AWS Training & Certification",
    status: "Completed",
    issueDate: "Completed",
    verificationUrl: "#",
    verificationLabel: "Course Completed",
    description: "Techniques for crafting effective prompts, zero-shot and few-shot prompting, and guiding foundation models toward accurate outputs."
  }
];
