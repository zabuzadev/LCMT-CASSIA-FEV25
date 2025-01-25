"use client"
import { HeroSection } from "@/components/jan2025/hero/hero";
import { SuccessStories } from "@/components/jan2025/section2";
import { Benefits } from "@/components/jan2025/section3";
import { Methodology } from "@/components/jan2025/section4";
import { MentorSection } from "@/components/jan2025/section5";

export default function CassiaV1() {
    return (
        <>
            <HeroSection />
            <SuccessStories />
            <Benefits />
            <Methodology />
            <MentorSection />
        </>
    );
}