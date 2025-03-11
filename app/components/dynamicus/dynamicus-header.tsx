"use client";
import Link from "next/link";
import Button from "../button";
import Card from "../card";
import ArrowLeft from "../icons/arrow-left";
import Typography from "../typography";

export default function DynamicusHeader() {
  return (
    <Card className="flex-grow flex-row gap-4 items-center">
      <Link href="/">
        <Button type="no-styles">
          <ArrowLeft />
        </Button>
      </Link>
      <Typography variant="h1">
        DynamicUs - Frontend Developer - SSR - Freelance
      </Typography>
    </Card>
  );
}
