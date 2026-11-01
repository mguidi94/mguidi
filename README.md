# guidi-site

Sito personale statico (HTML/CSS puro) per Massimo Guidi. Nessuna build necessaria.

## Anteprima locale
Aprire `index.html` direttamente nel browser.

## Stato attuale
- Sito: **https://mguidi.pages.dev** (Cloudflare Pages, deploy automatico da `main`)
- Repo GitHub pubblico: `github.com/mguidi94/mguidi`
- Indicizzabile: `robots.txt` aperto, `sitemap.xml`, proprietà verificata su Google Search Console.

## Aggiornare il sito
Modificare i file locali in questa cartella, poi:
```
git add -A
git commit -m "messaggio"
git push
```
Cloudflare rifà il deploy automaticamente ad ogni push (di solito entro 1-2 minuti).

## Attivare login (opzionale, se in futuro serve restringere l'accesso)
Cloudflare dashboard → **Zero Trust → Access → Applications → Add an application** → tipo "Self-hosted" → dominio: `mguidi.pages.dev` → policy "Allow" con le email autorizzate. Per rimuoverla di nuovo: elimina la Access Application, nessun altro cambiamento.

## Contenuti verificati
- Indirizzo email in `index.html` (sezione Contact): confermato corretto da Guidi
- Link ORCID e arXiv verificati contro `own-bib.bib`
