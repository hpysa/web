import { createContext, lazy } from "react";

export const AntdProvider = lazy(() => import('./AntdProvider'));
export const QueryProvider = lazy(() => import('./QueryProvider'));

export const Context = createContext({} as any);
export const ContextProvider = Context.Provider;

const Providers = {
    AntdProvider,
    QueryProvider,
    ContextProvider
}

export default Providers;
