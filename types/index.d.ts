import Vue from 'vue'
import {UIComponent} from "./component";

export interface InstallationOptions {
    [key: string]: any;
}

export function install(vue: typeof Vue, options: InstallationOptions): void

export type Component = UIComponent
