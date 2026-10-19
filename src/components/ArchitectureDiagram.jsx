import React from 'react';
import { Globe, Cloud, Cpu, Database, Server, Shield, Activity, Layers, ArrowRight, ArrowDown } from 'lucide-react';

export default function ArchitectureDiagram({ type = 'hero' }) {
  if (type === 'hero') {
    return (
      <div className="w-full rounded-xl bg-slate-900/80 border border-slate-800/80 p-5 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
            AWS Cloud Architecture Flow
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[11px]">
            Illustrative AWS architecture
          </span>
        </div>

        {/* SVG Diagram Canvas */}
        <div className="py-6 px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-2 items-center">
            {/* 1. User / Client */}
            <div className="flex flex-col items-center p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-center">
              <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-2">
                <Globe className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-slate-200">Client / Browser</span>
              <span className="text-[10px] text-slate-400 font-mono">HTTPS Requests</span>
            </div>

            {/* Arrow 1 */}
            <div className="hidden sm:flex justify-center text-[#FF9900]">
              <ArrowRight className="w-5 h-5 animate-pulse" aria-hidden="true" />
            </div>
            <div className="sm:hidden flex justify-center text-[#FF9900] py-1">
              <ArrowDown className="w-5 h-5" aria-hidden="true" />
            </div>

            {/* 2. Cloud Edge / API */}
            <div className="flex flex-col items-center p-3 rounded-lg bg-slate-800/60 border border-[#FF9900]/30 text-center relative group">
              <div className="w-10 h-10 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/40 flex items-center justify-center text-[#FF9900] mb-2">
                <Cloud className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-slate-200">Cloud / API Gateway</span>
              <span className="text-[10px] text-slate-400 font-mono">Routing & SSL</span>
            </div>

            {/* Arrow 2 */}
            <div className="hidden sm:flex justify-center text-[#FF9900]">
              <ArrowRight className="w-5 h-5 animate-pulse" aria-hidden="true" />
            </div>
            <div className="sm:hidden flex justify-center text-[#FF9900] py-1">
              <ArrowDown className="w-5 h-5" aria-hidden="true" />
            </div>

            {/* 3. Compute Engine */}
            <div className="flex flex-col items-center p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                <Cpu className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-slate-200">Compute Layer</span>
              <span className="text-[10px] text-slate-400 font-mono">Lambda / EC2</span>
            </div>
          </div>

          {/* Database Layer / Downward flow */}
          <div className="mt-4 pt-4 border-t border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs bg-slate-950/40 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF9900]">
                <Database className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <div className="font-medium text-slate-200">Data & Persistence Tier</div>
                <div className="text-[11px] text-slate-400 font-mono">DynamoDB / Amazon RDS with IAM Isolation</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <Shield className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>IAM Least Privilege</span>
              <span className="text-slate-600">|</span>
              <Activity className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
              <span>CloudWatch Telemetry</span>
            </div>
          </div>
        </div>

        <div className="text-center pt-1">
          <p className="text-[11px] text-slate-400 italic">
            Illustrative AWS architecture &bull; Conceptual representation of decoupled cloud services
          </p>
        </div>
      </div>
    );
  }

  if (type === 'serverless') {
    return (
      <div className="w-full rounded-lg bg-slate-950/70 border border-slate-800 p-4 font-sans">
        <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-slate-800/60">
          <span className="font-mono text-slate-300 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#FF9900]" aria-hidden="true" />
            Serverless Event-Driven Pipeline
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
            Illustrative architecture
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="font-semibold text-slate-200">S3 + CloudFront</div>
            <div className="text-[10px] text-slate-400 mt-0.5">SPA Frontend Hosting</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-[#FF9900]/30">
            <div className="font-semibold text-[#FF9900]">API Gateway</div>
            <div className="text-[10px] text-slate-400 mt-0.5">REST Endpoints & CORS</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-emerald-800/40">
            <div className="font-semibold text-emerald-400">AWS Lambda</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Event-driven CRUD</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-sky-800/40">
            <div className="font-semibold text-sky-400">DynamoDB</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Managed NoSQL Table</div>
          </div>
        </div>

        <div className="mt-2.5 text-[11px] text-slate-400 flex items-center justify-between px-1">
          <span>Security: IAM Execution Roles (Least Privilege)</span>
          <span>Logs: CloudWatch Log Streams</span>
        </div>
      </div>
    );
  }

  if (type === 'docker') {
    return (
      <div className="w-full rounded-lg bg-slate-950/70 border border-slate-800 p-4 font-sans">
        <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-slate-800/60">
          <span className="font-mono text-slate-300 flex items-center gap-1.5">
            <Server className="w-3.5 h-3.5 text-[#FF9900]" aria-hidden="true" />
            EC2 Containerized Host Flow
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
            Illustrative architecture
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
            <div className="font-semibold text-slate-200">Public Ingress</div>
            <div className="text-[10px] text-slate-400 mt-0.5">DNS / HTTPS :443</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-[#FF9900]/30">
            <div className="font-semibold text-[#FF9900]">Nginx Reverse Proxy</div>
            <div className="text-[10px] text-slate-400 mt-0.5">SSL Termination & Routing</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-sky-800/40">
            <div className="font-semibold text-sky-400">Docker Container</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Isolated Application Port</div>
          </div>
        </div>

        <div className="mt-2.5 text-[11px] text-slate-400 flex items-center justify-between px-1">
          <span>Boundary: EC2 Security Groups (80/443 Only)</span>
          <span>Host: Linux Ubuntu / systemd</span>
        </div>
      </div>
    );
  }

  if (type === 'three-tier') {
    return (
      <div className="w-full rounded-lg bg-slate-950/70 border border-slate-800 p-4 font-sans">
        <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-slate-800/60">
          <span className="font-mono text-slate-300 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#FF9900]" aria-hidden="true" />
            Multi-Tier VPC Network Segmentation
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
            Illustrative architecture
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded bg-slate-900 border border-amber-500/30">
            <div className="font-semibold text-[#FF9900]">Public Subnet</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Internet Gateway / Ingress</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-emerald-800/40">
            <div className="font-semibold text-emerald-400">Private App Subnet</div>
            <div className="text-[10px] text-slate-400 mt-0.5">EC2 / Fargate Instances</div>
          </div>
          <div className="p-2.5 rounded bg-slate-900 border border-indigo-800/40">
            <div className="font-semibold text-indigo-400">Private DB Subnet</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Amazon RDS (No Ingress)</div>
          </div>
        </div>

        <div className="mt-2.5 text-[11px] text-slate-400 flex items-center justify-between px-1">
          <span>Firewall: Tiered Security Groups</span>
          <span>Access: Strict Subnet Routing & NAT</span>
        </div>
      </div>
    );
  }

  return null;
}
