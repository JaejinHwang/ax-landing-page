"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, defaultViewport } from "@/lib/animations";

export function CtaSection() {
  const [formData, setFormData] = useState({ company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "전송에 실패했습니다.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="cta"
      className="relative bg-[var(--bg-primary)] py-28 md:py-40 overflow-hidden"
    >
      {/* Animated gradient mesh background (3-1: differentiate from Hero) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(201,149,106,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(212,184,150,0.06) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute top-[20%] left-[15%] w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,149,106,0.08) 0%, transparent 60%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,184,150,0.06) 0%, transparent 60%)",
            animation: "float 10s ease-in-out 2s infinite",
          }}
        />
      </div>

      {/* Mesh grid */}
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />

      {/* Orbiting ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[rgba(201,149,106,0.08)] pointer-events-none"
        style={{ animation: "orbitSlow 50s linear infinite" }}
      />

      <motion.div
        className="relative z-10 max-w-[800px] mx-auto px-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <div className="text-center mb-12">
          <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.2] tracking-[-1px] text-white mb-8">
            AI 전환,{" "}
            <span className="gradient-text">지금 시작하세요</span>
          </h2>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed">
            QANDA AX가 조직의 AI 여정을
            <br className="hidden sm:block" />
            처음부터 끝까지 함께합니다.
          </p>
        </div>

        {/* 3-1: Inline contact form */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card-glow p-8 md:p-10 space-y-5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/40 mb-2 font-medium">회사명</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(201,149,106,0.3)] focus:shadow-[0_0_16px_rgba(201,149,106,0.08)] transition-all duration-300"
                  placeholder="귀사의 이름을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm text-white/40 mb-2 font-medium">이메일</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(201,149,106,0.3)] focus:shadow-[0_0_16px_rgba(201,149,106,0.08)] transition-all duration-300"
                  placeholder="email@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/40 mb-2 font-medium">문의 내용</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-white placeholder:text-white/20 focus:outline-none focus:border-[rgba(201,149,106,0.3)] focus:shadow-[0_0_16px_rgba(201,149,106,0.08)] transition-all duration-300 resize-none"
                placeholder="AI 교육, Agent 개발 등 관심 분야를 알려주세요"
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold rounded-xl border border-transparent bg-[var(--accent-primary)] text-white shadow-[0_0_40px_rgba(201,149,106,0.3)] hover:shadow-[0_0_60px_rgba(201,149,106,0.45)] hover:bg-[#B58456] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {/* Shimmer effect (3-1) */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative">{loading ? "전송 중..." : "무료 상담 신청"}</span>
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            className="glass-card-glow p-10 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-semibold text-white mb-3">감사합니다!</p>
            <p className="text-white/50">상담 요청이 성공적으로 전송되었습니다.<br />빠른 시일 내에 연락드리겠습니다.</p>
          </motion.div>
        )}

        <p className="text-center text-[15px] text-white/20 font-mono tracking-wide">
          ax@mathpresso.com
        </p>
      </motion.div>
    </section>
  );
}
