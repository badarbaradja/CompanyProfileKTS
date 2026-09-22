import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Pending } from "@/components/ui/Pending";
import { PhotoGallery } from "@/components/ui/PhotoGallery";
import { site } from "@/content/site";
import { getPhotosByUsage } from "@/content/photos";

export const metadata: Metadata = {
  title: "Training",
  description: "Training and camps run by PT KTS.",
};

export default function TrainingPage() {
  const { training } = site;
  const galleryPhotos = getPhotosByUsage("training");

  return (
    <>
      <section className="section-padding">
        <Container>
          <FadeIn className="max-w-2xl mb-12">
            <SectionHeading
              eyebrow="Training"
              title="Training and camps"
              description={training.description}
            />
          </FadeIn>

          {galleryPhotos.length > 0 && (
            <FadeIn>
              <PhotoGallery photos={galleryPhotos} />
            </FadeIn>
          )}
        </Container>
      </section>

      {/* Instagram showcase */}
      <section className="section-padding-sm bg-[var(--color-surface-raised)]">
        <Container>
          <FadeIn className="max-w-2xl mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
              Instagram documentation
            </h2>
            <p className="text-sm text-[var(--color-text-muted)]">
              Training documentation can be viewed directly on our Instagram.
            </p>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            staggerDelay={0.08}
          >
            {training.instagramShowcase.map((post) => (
              <StaggerItem key={post.url}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300"
                >
                  <InstagramIcon />
                  <div className="mt-6">
                    <span className="block font-medium text-[var(--color-text)] mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                      {post.label}
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      View on Instagram →
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Documentation video */}
      <section className="section-padding-sm">
        <Container>
          <FadeIn className="max-w-2xl mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-3">
              Documentation video
            </h2>
          </FadeIn>
          <FadeIn>
            {training.youtubeUrl ? (
              <div className="aspect-video max-w-3xl rounded-[var(--radius-lg)] overflow-hidden">
                <iframe
                  src={training.youtubeUrl}
                  title="PT KTS documentation video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <Pending label="Documentation video (ESIC, Camp, community service)" className="max-w-2xl" />
            )}
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="var(--color-accent)" stroke="none" />
    </svg>
  );
}
