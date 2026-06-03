#!/bin/bash
# Fix: remove duplicate Header import from news pages
# Header already lives in app/layout.tsx — no need to import it per page
set -e
GREEN='\033[0;32m'; GOLD='\033[0;33m'; NC='\033[0m'
log()  { echo -e "${GREEN}✓${NC} $1"; }
info() { echo -e "${GOLD}→${NC} $1"; }

echo ""
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo -e "${GOLD}  Fix: remove duplicate Header from news pages${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo ""

# Remove Header import + usage from /news/page.tsx
info "Patching app/news/page.tsx..."
sed -i "/import Header from '@\/components\/Header'/d" app/news/page.tsx
sed -i "s|      <Header />||g" app/news/page.tsx
log "app/news/page.tsx patched"

# Remove Header import + usage from /news/[slug]/page.tsx
info "Patching app/news/[slug]/page.tsx..."
sed -i "/import Header from '@\/components\/Header'/d" "app/news/[slug]/page.tsx"
sed -i "s|      <Header />||g" "app/news/[slug]/page.tsx"
log "app/news/[slug]/page.tsx patched"

echo ""
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo -e "${GREEN}  Done. Header now comes from layout.tsx only.${NC}"
echo -e "${GOLD}═══════════════════════════════════════════════════${NC}"
echo ""
