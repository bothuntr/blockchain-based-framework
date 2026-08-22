import React from 'react';
import { useWeb3 } from '../context/Web3Context';
import { Spinner } from './UI';

export default function ConnectOverlay() {
  const { userAddress, connect, connecting } = useWeb3();
  if (userAddress) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(11,22,41,0.96)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 999, backdropFilter: 'blur(6px)',
    }}>
      <div style={{
        background: 'var(--navy-mid)',
        border: '1px solid var(--navy-border)',
        borderRadius: 16, padding: '44px 40px',
        textAlign: 'center', maxWidth: 400, width: '90%',
        boxShadow: 'var(--shadow)',
      }}>
        {/* Icon */}
        <div style={{
          width: 64, height: 64, background: 'var(--amber)', borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, margin: '0 auto 20px', color: 'var(--navy)', fontWeight: 700,
        }}>⛓</div>

        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>VaultChain</h1>
        <p style={{ fontSize: 14, color: 'var(--slate)', marginBottom: 6, lineHeight: 1.5 }}>
          Decentralized Identity &amp; Asset Management
        </p>
        <p style={{ fontSize: 12, color: 'var(--slate-dim)', marginBottom: 32, lineHeight: 1.6 }}>
          Connect your MetaMask wallet to access the platform. All actions are signed on-chain — your keys, your identity.
        </p>

        <button
          className="btn btn-primary"
          onClick={connect}
          disabled={connecting}
          style={{ width: '100%', justifyContent: 'center', fontSize: 15, padding: '12px' }}
        >
          {connecting ? <><Spinner /> Connecting…</> : 'Connect MetaMask'}
        </button>

        <div style={{
          display: 'flex', gap: 20, justifyContent: 'center',
          marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--navy-border)',
        }}>
          {[
            { icon: '🪪', label: 'DID Identity' },
            { icon: '🖼', label: 'NFT Assets' },
            { icon: '⏱', label: "Dead Man's Switch" },
          ].map(({ icon, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
              <div style={{ fontSize: 10, color: 'var(--slate-dim)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
            </div>
          ))}
        </div>

        <p style={{ marginTop: 16, fontSize: 10, color: 'var(--slate-dim)' }}>
          SIH 2024 · Sepolia Testnet · Built with Foundry + React
        </p>
      </div>
    </div>
  );
}
