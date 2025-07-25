import { PlatformClass, platforms, PlatformGroupSpec } from "@gitcoin/passport-platforms";
import { PLATFORM_ID } from "@gitcoin/passport-types";

// import { PlatformProps } from "../components/GenericPlatform";

const {
  Ens,
  Lens,
  Github,
  Gitcoin,
  NFT,
  GnosisSafe,
  Snapshot,
  POAP,
  ETH,
  ZkSync,
  Discord,
  Linkedin,
  GtcStaking,
  Google,
  Brightid,
  Coinbase,
  GuildXYZ,
  Idena,
  Civic,
  TrustaLabs,
  Outdid,
  Binance,
  CustomGithub,
  HumanIdPhone,
  HumanIdKyc,
} = platforms;

type CustomPlatformTypeInfo = {
  basePlatformName: string;
  platformClass: typeof PlatformClass;
  platformParams: Record<string, undefined | null | string | number | boolean | object>;
};

export type PlatformProps = {
  platFormGroupSpec: PlatformGroupSpec[];
  platform: PlatformClass;
};

// This should never be used directly, instead use the `usePlatforms` hook
export const defaultPlatformMap = new Map<PLATFORM_ID, PlatformProps>();

defaultPlatformMap.set("Ens", {
  platform: new Ens.EnsPlatform(),
  platFormGroupSpec: Ens.ProviderConfig,
});

defaultPlatformMap.set("NFT", {
  platform: new NFT.NFTPlatform(),
  platFormGroupSpec: NFT.ProviderConfig,
});

defaultPlatformMap.set("Github", {
  platform: new Github.GithubPlatform({
    clientId: import.meta.env.VITE_PASSPORT_GITHUB_CLIENT_ID,
    redirectUri: import.meta.env.VITE_PASSPORT_GITHUB_CALLBACK,
  }),
  platFormGroupSpec: Github.ProviderConfig,
});

defaultPlatformMap.set("Gitcoin", {
  platform: new Gitcoin.GitcoinPlatform({
    clientId: import.meta.env.VITE_PASSPORT_GITHUB_CLIENT_ID,
    redirectUri: import.meta.env.VITE_PASSPORT_GITHUB_CALLBACK,
  }),
  platFormGroupSpec: Gitcoin.ProviderConfig,
});

defaultPlatformMap.set("Snapshot", {
  platform: new Snapshot.SnapshotPlatform(),
  platFormGroupSpec: Snapshot.ProviderConfig,
});

defaultPlatformMap.set("ZkSync", {
  platform: new ZkSync.ZkSyncPlatform(),
  platFormGroupSpec: ZkSync.ProviderConfig,
});

defaultPlatformMap.set("Lens", {
  platform: new Lens.LensPlatform(),
  platFormGroupSpec: Lens.ProviderConfig,
});

defaultPlatformMap.set("GnosisSafe", {
  platform: new GnosisSafe.GnosisSafePlatform(),
  platFormGroupSpec: GnosisSafe.ProviderConfig,
});

defaultPlatformMap.set("ETH", {
  platform: new ETH.ETHPlatform(),
  platFormGroupSpec: ETH.ProviderConfig,
});

if (process.env.NEXT_PUBLIC_FF_NEW_POAP_STAMPS === "on") {
  defaultPlatformMap.set("POAP", {
    platform: new POAP.POAPPlatform(),
    platFormGroupSpec: POAP.ProviderConfig,
  });
}

defaultPlatformMap.set("Discord", {
  platform: new Discord.DiscordPlatform({
    clientId: import.meta.env.VITE_PASSPORT_DISCORD_CLIENT_ID,
    redirectUri: import.meta.env.VITE_PASSPORT_DISCORD_CALLBACK,
  }),
  platFormGroupSpec: Discord.ProviderConfig,
});

defaultPlatformMap.set("Linkedin", {
  platform: new Linkedin.LinkedinPlatform({
    clientId: import.meta.env.VITE_PASSPORT_LINKEDIN_CLIENT_ID_V2,
    redirectUri: import.meta.env.VITE_PASSPORT_LINKEDIN_CALLBACK,
  }),
  platFormGroupSpec: Linkedin.ProviderConfig,
});

defaultPlatformMap.set("GtcStaking", {
  platform: new GtcStaking.GTCStakingPlatform(),
  platFormGroupSpec: GtcStaking.ProviderConfig,
});

defaultPlatformMap.set("Google", {
  platform: new Google.GooglePlatform({
    clientId: import.meta.env.VITE_PASSPORT_GOOGLE_CLIENT_ID,
    redirectUri: import.meta.env.VITE_PASSPORT_GOOGLE_CALLBACK,
  }),
  platFormGroupSpec: Google.ProviderConfig,
});

defaultPlatformMap.set("Brightid", {
  platform: new Brightid.BrightidPlatform(),
  platFormGroupSpec: Brightid.ProviderConfig,
});

defaultPlatformMap.set("Coinbase", {
  platform: new Coinbase.CoinbasePlatform({
    clientId: import.meta.env.VITE_PASSPORT_COINBASE_CLIENT_ID,
    redirectUri: import.meta.env.VITE_PASSPORT_COINBASE_CALLBACK,
  }),
  platFormGroupSpec: Coinbase.ProviderConfig,
});

if (process.env.NEXT_PUBLIC_FF_OUTDID_STAMP === "on") {
  defaultPlatformMap.set("Outdid", {
    platform: new Outdid.OutdidPlatform({
      clientId: process.env.NEXT_PUBLIC_OUTDID_API_KEY,
      redirectUri: process.env.NEXT_PUBLIC_PASSPORT_OUTDID_CALLBACK,
    }),
    platFormGroupSpec: Outdid.ProviderConfig,
  });
}

if (process.env.NEXT_PUBLIC_FF_GUILD_STAMP === "on") {
  defaultPlatformMap.set("GuildXYZ", {
    platform: new GuildXYZ.GuildXYZPlatform(),
    platFormGroupSpec: GuildXYZ.ProviderConfig,
  });
}

defaultPlatformMap.set("HumanIdKyc", {
  platform: new HumanIdKyc.HumanIdKycPlatform(),
  platFormGroupSpec: HumanIdKyc.ProviderConfig,
});

defaultPlatformMap.set("HumanIdPhone", {
  platform: new HumanIdPhone.HumanIdPhonePlatform(),
  platFormGroupSpec: HumanIdPhone.ProviderConfig,
});

if (process.env.NEXT_PUBLIC_FF_IDENA_STAMP === "on") {
  defaultPlatformMap.set("Idena", {
    platform: new Idena.IdenaPlatform(),
    platFormGroupSpec: Idena.ProviderConfig,
  });
}

defaultPlatformMap.set("Civic", {
  platform: new Civic.CivicPlatform({
    redirectUri: process.env.NEXT_PUBLIC_PASSPORT_CIVIC_CALLBACK,
  }),
  platFormGroupSpec: Civic.ProviderConfig,
});

if (process.env.NEXT_PUBLIC_FF_TRUSTALABS_STAMPS === "on") {
  defaultPlatformMap.set("TrustaLabs", {
    platform: new TrustaLabs.TrustaLabsPlatform(),
    platFormGroupSpec: TrustaLabs.ProviderConfig,
  });
}

if (process.env.NEXT_PUBLIC_FF_BINANCE_STAMPS === "on") {
  defaultPlatformMap.set("Binance", {
    platform: new Binance.BinancePlatform(),
    platFormGroupSpec: Binance.ProviderConfig,
  });
}

export const CUSTOM_PLATFORM_TYPE_INFO: { [id: string]: CustomPlatformTypeInfo } = {
  DEVEL: {
    basePlatformName: "CustomGithub",
    platformClass: CustomGithub.CustomGithubPlatform,
    platformParams: {
      clientId: process.env.NEXT_PUBLIC_PASSPORT_GITHUB_CLIENT_ID,
      redirectUri: process.env.NEXT_PUBLIC_PASSPORT_GITHUB_CALLBACK,
    },
  },
};
