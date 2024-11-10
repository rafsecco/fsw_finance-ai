"use client";

import { Button } from "@/app/_components/ui/button";
import Markdown from "react-markdown";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { BotIcon, Loader2Icon } from "lucide-react";
import { generateAiReport } from "../_actions/generate-ai-report";
import { useState } from "react";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import Link from "next/link";
// import remarkGfm from "remark-gfm";

interface AiReportButtonProps {
  hasPremiumPlan: boolean;
  month: string;
}

const AiReportButton = ({ month, hasPremiumPlan }: AiReportButtonProps) => {
  const [reportIsLoading, setReportIsLoading] = useState(false);
  const [report, setReport] = useState<string | null>(null);
  const handleGenerateReportClick = async () => {
    try {
      setReportIsLoading(true);
      const report = await generateAiReport({ month });
      console.log({ report });
      setReport(report);
    } catch (error) {
      console.error(error);
    } finally {
      setReportIsLoading(false);
    }
  };
  console.log({ report });
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="font-bold">
            <BotIcon />
            Relatório IA
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[600px]">
          {hasPremiumPlan ? (
            <>
              <DialogHeader>
                <DialogTitle>Relatório com IA</DialogTitle>
                <DialogDescription>
                  Use inteligência artificial para gerar um relatório com
                  insights sobre suas finanças.
                </DialogDescription>
              </DialogHeader>
              {report && (
                <ScrollArea className="prose prose-slate max-h-[450px] text-white marker:text-white prose-h3:text-white prose-h4:text-white prose-strong:text-white">
                  <Markdown>{report}</Markdown>
                  {/* <Markdown remarkPlugins={[remarkGfm]}>{report}</Markdown> */}
                </ScrollArea>
              )}
              <DialogFooter>
                <DialogClose>
                  <Button variant="ghost" className="font-bold">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button
                  onClick={handleGenerateReportClick}
                  disabled={reportIsLoading}
                  className="font-bold"
                >
                  {reportIsLoading && (
                    <Loader2Icon className="mr-1 animate-spin" />
                  )}
                  {reportIsLoading ? "Gerando relatório..." : "Gerar relatório"}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Relatório com IA</DialogTitle>
                <DialogDescription>
                  Você precisa de um plano premium para gerar relatórios com IA.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose>
                  <Button variant="ghost" className="font-bold">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button asChild>
                  <Link href="/subscription">Assinar plano premium</Link>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AiReportButton;
