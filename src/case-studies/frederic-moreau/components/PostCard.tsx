"use client";

import { Heart, MessageCircle, Repeat2, BarChart3 } from "lucide-react";
const victorPhoto = "/etudes/frederic-moreau/victor.webp";

interface Props {
  title: string;
  excerpt: string;
  impressions: number;
  reactions?: number;
  comments?: number;
  badge?: string;
  authorPhoto?: string;
  authorName?: string;
  authorRole?: string;
}

export function PostCard({
  title,
  excerpt,
  impressions,
  reactions,
  comments,
  badge,
  authorPhoto = victorPhoto,
  authorName = "Victor Laschon",
  authorRole = "Co-fondateur Datayoyo · Commissaire aux comptes",
}: Props) {
  return (
    <div className="group rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <img src={authorPhoto} alt={authorName} className="h-11 w-11 rounded-full object-cover flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-foreground text-sm">{authorName}</p>
            {badge && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-linkedin bg-linkedin/10 px-2 py-0.5 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{authorRole}</p>
        </div>
      </div>
      <h4 className="mt-4 font-semibold text-foreground leading-snug">{title}</h4>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
      <div className="mt-5 pt-4 border-t flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5"><BarChart3 className="h-3.5 w-3.5" />{impressions.toLocaleString("fr-FR")}</span>
        {reactions !== undefined && <span className="flex items-center gap-1.5"><Heart className="h-3.5 w-3.5" />{reactions}</span>}
        {comments !== undefined && <span className="flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5" />{comments}</span>}
        <span className="flex items-center gap-1.5 ml-auto"><Repeat2 className="h-3.5 w-3.5" /></span>
      </div>
    </div>
  );
}
