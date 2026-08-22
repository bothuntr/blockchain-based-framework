import React, { useState } from 'react';
import { Web3Provider } from './context/Web3Context';
import Header        from './components/Header';
import Sidebar       from './components/Sidebar';
import AuditPanel    from './components/AuditPanel';
import ConnectOverlay from './components/ConnectOverlay';
import IdentityPanel from './components/panels/IdentityPanel';
import RBACPanel     from './components/panels/RBACPanel';
import AssetsPanel   from './components/panels/AssetsPanel';
import MintPanel     from './components/panels/MintPanel';
import DMSPanel      from './components/panels/DMSPanel';
import ClaimPanel    from './components/panels/ClaimPanel';
import ConfigPanel   from './components/panels/ConfigPanel';

const PANELS = {
  identity: IdentityPanel,
  rbac:     RBACPanel,
  assets:   AssetsPanel,
  mint:     MintPanel,
  dms:      DMSPanel,
  claim:    ClaimPanel,
  config:   ConfigPanel,
};

function AppInner() {
  const [active, setActive] = useState('identity');
  const [role, setRole]     = useState(null);

  const Panel = PANELS[active] || IdentityPanel;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <ConnectOverlay />
      <Header role={role} />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar active={active} onNav={setActive} />

        <main style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <Panel onRoleDetected={setRole} />
        </main>

        <AuditPanel />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Web3Provider>
      <AppInner />
    </Web3Provider>
  );
}
