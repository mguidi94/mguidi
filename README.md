# guidi-site

Sito personale statico (HTML/CSS puro) per Massimo Guidi. Nessuna build necessaria.

## Anteprima locale
Aprire `index.html` direttamente nel browser.

## Stato attuale
- Repo GitHub privato: `github.com/mguidi94/guidi-site`
- Deploy live via Cloudflare Pages/Workers: `https://guidi-site.massimo-guidi6.workers.dev`
- Nessuna protezione Access attiva: il sito è raggiungibile da chiunque abbia il link (non indicizzato, non elencato pubblicamente). Scelta esplicita dell'utente per semplicità durante la fase di correzioni.
- Branch locale `redesign-2026` (non pushato): redesign "Harmonia Nova" (antico + moderno), pubblicazioni/talk/mentoring rigenerati dal CV; in attesa di approvazione prima del push.

## Aggiornare il sito
Modificare i file locali in questa cartella, poi:
```
git add -A
git commit -m "messaggio"
git push
```
Cloudflare rifà il deploy automaticamente ad ogni push (di solito entro 1-2 minuti).

## Attivare login (opzionale, se in futuro serve restringere l'accesso)
Cloudflare dashboard → **Zero Trust → Access → Applications → Add an application** → tipo "Self-hosted" → dominio: `guidi-site.massimo-guidi6.workers.dev` → policy "Allow" con le email autorizzate. Per rimuoverla di nuovo: elimina la Access Application, nessun altro cambiamento.

## Contenuti verificati
- Indirizzo email in `index.html` (sezione Contact): confermato corretto da Guidi
- Link ORCID e arXiv verificati contro `own-bib.bib`
