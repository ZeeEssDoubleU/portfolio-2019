/* eslint-disable @typescript-eslint/ban-types */

import { ReactElement } from "react"
import { PageProps } from "gatsby"

// ************
// types
// ************

export interface WrapElement_I {
	element: ReactElement
}

export interface WrapElementWithProps_I {
	element: ReactElement
	props: PageProps
}

export interface Provider_I {
	children: ReactElement | ReactElement[]
}

// ************
// transformers
// ************

// expands object types one level deep
export type Expand<T> = T extends infer O 
	? { [K in keyof O]: O[K] } 
	: never

// expands object types recursively
export type ExpandRecursively<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: ExpandRecursively<O[K]> }
		: never
	: T

// change target key types
//  - only goes one level deep
export type ChangeTypeOfKeys_Flat<Obj, Target, NewType> = {
	[K in keyof Obj]: K extends Target ? NewType : Obj[K]
}

// change types of ALL keys
//  - maintains shape of data structures
//  - results in duped keys in arrays, etc
export type ChangeTypes_All<Obj, NewType> = Obj extends object
	? { [K in keyof Obj]: ChangeTypes_All<Obj[K], NewType> }
	: NewType

// change target key types
//  - changes target data structures
export type ChangeTypeOfKeys<Obj, Target, NewType> = {
	[K in keyof Obj]: K extends Target
		? NewType
		: Obj[K] extends object
			? ChangeTypeOfKeys<Obj[K], Target, NewType>
			: Obj[K]
}

// change target key types
//  - changes only scalars
export type ChangeTypeOfKeys_Scalars<Obj, Target, NewType> = {
	[K in keyof Obj]: Obj[K] extends object
		? ChangeTypeOfKeys_Scalars<Obj[K], Target, NewType>
		: K extends Target
			? NewType
			: Obj[K]
}
