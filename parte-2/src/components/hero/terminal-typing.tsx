export default function TerminalTyping() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-6 py-3">
      <span className="h-3 w-3 rounded-full bg-brand-yellow" />
      <span className="font-mono text-sm text-white terminal-typing">
        # Carregando... &gt;&gt;&gt; print(&apos;Olá, Mundo Dev!&apos;)
      </span>
    </div>
  );
}
