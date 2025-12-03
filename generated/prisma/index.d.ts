
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Dataset
 * 
 */
export type Dataset = $Result.DefaultSelection<Prisma.$DatasetPayload>
/**
 * Model DatasetDocument
 * 
 */
export type DatasetDocument = $Result.DefaultSelection<Prisma.$DatasetDocumentPayload>
/**
 * Model PromptTemplate
 * 
 */
export type PromptTemplate = $Result.DefaultSelection<Prisma.$PromptTemplatePayload>
/**
 * Model ModelConfig
 * 
 */
export type ModelConfig = $Result.DefaultSelection<Prisma.$ModelConfigPayload>
/**
 * Model EvalRun
 * 
 */
export type EvalRun = $Result.DefaultSelection<Prisma.$EvalRunPayload>
/**
 * Model EvalResult
 * 
 */
export type EvalResult = $Result.DefaultSelection<Prisma.$EvalResultPayload>
/**
 * Model HumanReview
 * 
 */
export type HumanReview = $Result.DefaultSelection<Prisma.$HumanReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Documents
 * const documents = await prisma.document.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Documents
   * const documents = await prisma.document.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataset`: Exposes CRUD operations for the **Dataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasets
    * const datasets = await prisma.dataset.findMany()
    * ```
    */
  get dataset(): Prisma.DatasetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datasetDocument`: Exposes CRUD operations for the **DatasetDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatasetDocuments
    * const datasetDocuments = await prisma.datasetDocument.findMany()
    * ```
    */
  get datasetDocument(): Prisma.DatasetDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptTemplate`: Exposes CRUD operations for the **PromptTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptTemplates
    * const promptTemplates = await prisma.promptTemplate.findMany()
    * ```
    */
  get promptTemplate(): Prisma.PromptTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelConfig`: Exposes CRUD operations for the **ModelConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelConfigs
    * const modelConfigs = await prisma.modelConfig.findMany()
    * ```
    */
  get modelConfig(): Prisma.ModelConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evalRun`: Exposes CRUD operations for the **EvalRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvalRuns
    * const evalRuns = await prisma.evalRun.findMany()
    * ```
    */
  get evalRun(): Prisma.EvalRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evalResult`: Exposes CRUD operations for the **EvalResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvalResults
    * const evalResults = await prisma.evalResult.findMany()
    * ```
    */
  get evalResult(): Prisma.EvalResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.humanReview`: Exposes CRUD operations for the **HumanReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HumanReviews
    * const humanReviews = await prisma.humanReview.findMany()
    * ```
    */
  get humanReview(): Prisma.HumanReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Document: 'Document',
    Dataset: 'Dataset',
    DatasetDocument: 'DatasetDocument',
    PromptTemplate: 'PromptTemplate',
    ModelConfig: 'ModelConfig',
    EvalRun: 'EvalRun',
    EvalResult: 'EvalResult',
    HumanReview: 'HumanReview'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "document" | "dataset" | "datasetDocument" | "promptTemplate" | "modelConfig" | "evalRun" | "evalResult" | "humanReview"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Dataset: {
        payload: Prisma.$DatasetPayload<ExtArgs>
        fields: Prisma.DatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findFirst: {
            args: Prisma.DatasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findMany: {
            args: Prisma.DatasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          create: {
            args: Prisma.DatasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          createMany: {
            args: Prisma.DatasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          delete: {
            args: Prisma.DatasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          update: {
            args: Prisma.DatasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          deleteMany: {
            args: Prisma.DatasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          upsert: {
            args: Prisma.DatasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          aggregate: {
            args: Prisma.DatasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataset>
          }
          groupBy: {
            args: Prisma.DatasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetCountAggregateOutputType> | number
          }
        }
      }
      DatasetDocument: {
        payload: Prisma.$DatasetDocumentPayload<ExtArgs>
        fields: Prisma.DatasetDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>
          }
          findFirst: {
            args: Prisma.DatasetDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>
          }
          findMany: {
            args: Prisma.DatasetDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>[]
          }
          create: {
            args: Prisma.DatasetDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>
          }
          createMany: {
            args: Prisma.DatasetDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>[]
          }
          delete: {
            args: Prisma.DatasetDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>
          }
          update: {
            args: Prisma.DatasetDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>
          }
          deleteMany: {
            args: Prisma.DatasetDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>[]
          }
          upsert: {
            args: Prisma.DatasetDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetDocumentPayload>
          }
          aggregate: {
            args: Prisma.DatasetDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatasetDocument>
          }
          groupBy: {
            args: Prisma.DatasetDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetDocumentCountAggregateOutputType> | number
          }
        }
      }
      PromptTemplate: {
        payload: Prisma.$PromptTemplatePayload<ExtArgs>
        fields: Prisma.PromptTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findFirst: {
            args: Prisma.PromptTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findMany: {
            args: Prisma.PromptTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          create: {
            args: Prisma.PromptTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          createMany: {
            args: Prisma.PromptTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          delete: {
            args: Prisma.PromptTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          update: {
            args: Prisma.PromptTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PromptTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          upsert: {
            args: Prisma.PromptTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          aggregate: {
            args: Prisma.PromptTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptTemplate>
          }
          groupBy: {
            args: Prisma.PromptTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateCountAggregateOutputType> | number
          }
        }
      }
      ModelConfig: {
        payload: Prisma.$ModelConfigPayload<ExtArgs>
        fields: Prisma.ModelConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>
          }
          findFirst: {
            args: Prisma.ModelConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>
          }
          findMany: {
            args: Prisma.ModelConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>[]
          }
          create: {
            args: Prisma.ModelConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>
          }
          createMany: {
            args: Prisma.ModelConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>[]
          }
          delete: {
            args: Prisma.ModelConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>
          }
          update: {
            args: Prisma.ModelConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>
          }
          deleteMany: {
            args: Prisma.ModelConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>[]
          }
          upsert: {
            args: Prisma.ModelConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelConfigPayload>
          }
          aggregate: {
            args: Prisma.ModelConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelConfig>
          }
          groupBy: {
            args: Prisma.ModelConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ModelConfigCountAggregateOutputType> | number
          }
        }
      }
      EvalRun: {
        payload: Prisma.$EvalRunPayload<ExtArgs>
        fields: Prisma.EvalRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvalRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvalRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>
          }
          findFirst: {
            args: Prisma.EvalRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvalRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>
          }
          findMany: {
            args: Prisma.EvalRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>[]
          }
          create: {
            args: Prisma.EvalRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>
          }
          createMany: {
            args: Prisma.EvalRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvalRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>[]
          }
          delete: {
            args: Prisma.EvalRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>
          }
          update: {
            args: Prisma.EvalRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>
          }
          deleteMany: {
            args: Prisma.EvalRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvalRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvalRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>[]
          }
          upsert: {
            args: Prisma.EvalRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalRunPayload>
          }
          aggregate: {
            args: Prisma.EvalRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvalRun>
          }
          groupBy: {
            args: Prisma.EvalRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvalRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvalRunCountArgs<ExtArgs>
            result: $Utils.Optional<EvalRunCountAggregateOutputType> | number
          }
        }
      }
      EvalResult: {
        payload: Prisma.$EvalResultPayload<ExtArgs>
        fields: Prisma.EvalResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvalResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvalResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>
          }
          findFirst: {
            args: Prisma.EvalResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvalResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>
          }
          findMany: {
            args: Prisma.EvalResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>[]
          }
          create: {
            args: Prisma.EvalResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>
          }
          createMany: {
            args: Prisma.EvalResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvalResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>[]
          }
          delete: {
            args: Prisma.EvalResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>
          }
          update: {
            args: Prisma.EvalResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>
          }
          deleteMany: {
            args: Prisma.EvalResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvalResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvalResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>[]
          }
          upsert: {
            args: Prisma.EvalResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvalResultPayload>
          }
          aggregate: {
            args: Prisma.EvalResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvalResult>
          }
          groupBy: {
            args: Prisma.EvalResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvalResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvalResultCountArgs<ExtArgs>
            result: $Utils.Optional<EvalResultCountAggregateOutputType> | number
          }
        }
      }
      HumanReview: {
        payload: Prisma.$HumanReviewPayload<ExtArgs>
        fields: Prisma.HumanReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HumanReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HumanReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>
          }
          findFirst: {
            args: Prisma.HumanReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HumanReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>
          }
          findMany: {
            args: Prisma.HumanReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>[]
          }
          create: {
            args: Prisma.HumanReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>
          }
          createMany: {
            args: Prisma.HumanReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HumanReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>[]
          }
          delete: {
            args: Prisma.HumanReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>
          }
          update: {
            args: Prisma.HumanReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>
          }
          deleteMany: {
            args: Prisma.HumanReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HumanReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HumanReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>[]
          }
          upsert: {
            args: Prisma.HumanReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HumanReviewPayload>
          }
          aggregate: {
            args: Prisma.HumanReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHumanReview>
          }
          groupBy: {
            args: Prisma.HumanReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<HumanReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.HumanReviewCountArgs<ExtArgs>
            result: $Utils.Optional<HumanReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    document?: DocumentOmit
    dataset?: DatasetOmit
    datasetDocument?: DatasetDocumentOmit
    promptTemplate?: PromptTemplateOmit
    modelConfig?: ModelConfigOmit
    evalRun?: EvalRunOmit
    evalResult?: EvalResultOmit
    humanReview?: HumanReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    datasetDocs: number
    evalResults: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasetDocs?: boolean | DocumentCountOutputTypeCountDatasetDocsArgs
    evalResults?: boolean | DocumentCountOutputTypeCountEvalResultsArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountDatasetDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetDocumentWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountEvalResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalResultWhereInput
  }


  /**
   * Count Type DatasetCountOutputType
   */

  export type DatasetCountOutputType = {
    documents: number
    evalRuns: number
  }

  export type DatasetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DatasetCountOutputTypeCountDocumentsArgs
    evalRuns?: boolean | DatasetCountOutputTypeCountEvalRunsArgs
  }

  // Custom InputTypes
  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetCountOutputType
     */
    select?: DatasetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetDocumentWhereInput
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountEvalRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalRunWhereInput
  }


  /**
   * Count Type PromptTemplateCountOutputType
   */

  export type PromptTemplateCountOutputType = {
    evalRuns: number
  }

  export type PromptTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRuns?: boolean | PromptTemplateCountOutputTypeCountEvalRunsArgs
  }

  // Custom InputTypes
  /**
   * PromptTemplateCountOutputType without action
   */
  export type PromptTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplateCountOutputType
     */
    select?: PromptTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptTemplateCountOutputType without action
   */
  export type PromptTemplateCountOutputTypeCountEvalRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalRunWhereInput
  }


  /**
   * Count Type ModelConfigCountOutputType
   */

  export type ModelConfigCountOutputType = {
    evalRuns: number
  }

  export type ModelConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRuns?: boolean | ModelConfigCountOutputTypeCountEvalRunsArgs
  }

  // Custom InputTypes
  /**
   * ModelConfigCountOutputType without action
   */
  export type ModelConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfigCountOutputType
     */
    select?: ModelConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelConfigCountOutputType without action
   */
  export type ModelConfigCountOutputTypeCountEvalRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalRunWhereInput
  }


  /**
   * Count Type EvalRunCountOutputType
   */

  export type EvalRunCountOutputType = {
    results: number
  }

  export type EvalRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | EvalRunCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * EvalRunCountOutputType without action
   */
  export type EvalRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRunCountOutputType
     */
    select?: EvalRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EvalRunCountOutputType without action
   */
  export type EvalRunCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    pageCount: number | null
  }

  export type DocumentSumAggregateOutputType = {
    pageCount: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    storagePath: string | null
    extractedText: string | null
    pageCount: number | null
    createdAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    originalName: string | null
    storagePath: string | null
    extractedText: string | null
    pageCount: number | null
    createdAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    name: number
    originalName: number
    storagePath: number
    extractedText: number
    pageCount: number
    createdAt: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    pageCount?: true
  }

  export type DocumentSumAggregateInputType = {
    pageCount?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    storagePath?: true
    extractedText?: true
    pageCount?: true
    createdAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    storagePath?: true
    extractedText?: true
    pageCount?: true
    createdAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    name?: true
    originalName?: true
    storagePath?: true
    extractedText?: true
    pageCount?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt: Date
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    storagePath?: boolean
    extractedText?: boolean
    pageCount?: boolean
    createdAt?: boolean
    datasetDocs?: boolean | Document$datasetDocsArgs<ExtArgs>
    evalResults?: boolean | Document$evalResultsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    storagePath?: boolean
    extractedText?: boolean
    pageCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    originalName?: boolean
    storagePath?: boolean
    extractedText?: boolean
    pageCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    name?: boolean
    originalName?: boolean
    storagePath?: boolean
    extractedText?: boolean
    pageCount?: boolean
    createdAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "originalName" | "storagePath" | "extractedText" | "pageCount" | "createdAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    datasetDocs?: boolean | Document$datasetDocsArgs<ExtArgs>
    evalResults?: boolean | Document$evalResultsArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      datasetDocs: Prisma.$DatasetDocumentPayload<ExtArgs>[]
      evalResults: Prisma.$EvalResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      originalName: string
      storagePath: string
      extractedText: string
      pageCount: number
      createdAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    datasetDocs<T extends Document$datasetDocsArgs<ExtArgs> = {}>(args?: Subset<T, Document$datasetDocsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evalResults<T extends Document$evalResultsArgs<ExtArgs> = {}>(args?: Subset<T, Document$evalResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly originalName: FieldRef<"Document", 'String'>
    readonly storagePath: FieldRef<"Document", 'String'>
    readonly extractedText: FieldRef<"Document", 'String'>
    readonly pageCount: FieldRef<"Document", 'Int'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.datasetDocs
   */
  export type Document$datasetDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    where?: DatasetDocumentWhereInput
    orderBy?: DatasetDocumentOrderByWithRelationInput | DatasetDocumentOrderByWithRelationInput[]
    cursor?: DatasetDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetDocumentScalarFieldEnum | DatasetDocumentScalarFieldEnum[]
  }

  /**
   * Document.evalResults
   */
  export type Document$evalResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    where?: EvalResultWhereInput
    orderBy?: EvalResultOrderByWithRelationInput | EvalResultOrderByWithRelationInput[]
    cursor?: EvalResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvalResultScalarFieldEnum | EvalResultScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Dataset
   */

  export type AggregateDataset = {
    _count: DatasetCountAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  export type DatasetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DatasetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DatasetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type DatasetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type DatasetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type DatasetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type DatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataset to aggregate.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datasets
    **/
    _count?: true | DatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetMaxAggregateInputType
  }

  export type GetDatasetAggregateType<T extends DatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateDataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataset[P]>
      : GetScalarType<T[P], AggregateDataset[P]>
  }




  export type DatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithAggregationInput | DatasetOrderByWithAggregationInput[]
    by: DatasetScalarFieldEnum[] | DatasetScalarFieldEnum
    having?: DatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetCountAggregateInputType | true
    _min?: DatasetMinAggregateInputType
    _max?: DatasetMaxAggregateInputType
  }

  export type DatasetGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    _count: DatasetCountAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  type GetDatasetGroupByPayload<T extends DatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetGroupByOutputType[P]>
        }
      >
    >


  export type DatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    documents?: boolean | Dataset$documentsArgs<ExtArgs>
    evalRuns?: boolean | Dataset$evalRunsArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type DatasetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["dataset"]>
  export type DatasetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Dataset$documentsArgs<ExtArgs>
    evalRuns?: boolean | Dataset$evalRunsArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DatasetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dataset"
    objects: {
      documents: Prisma.$DatasetDocumentPayload<ExtArgs>[]
      evalRuns: Prisma.$EvalRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["dataset"]>
    composites: {}
  }

  type DatasetGetPayload<S extends boolean | null | undefined | DatasetDefaultArgs> = $Result.GetResult<Prisma.$DatasetPayload, S>

  type DatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetCountAggregateInputType | true
    }

  export interface DatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dataset'], meta: { name: 'Dataset' } }
    /**
     * Find zero or one Dataset that matches the filter.
     * @param {DatasetFindUniqueArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetFindUniqueArgs>(args: SelectSubset<T, DatasetFindUniqueArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dataset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetFindUniqueOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetFindFirstArgs>(args?: SelectSubset<T, DatasetFindFirstArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasets
     * const datasets = await prisma.dataset.findMany()
     * 
     * // Get first 10 Datasets
     * const datasets = await prisma.dataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetWithIdOnly = await prisma.dataset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetFindManyArgs>(args?: SelectSubset<T, DatasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dataset.
     * @param {DatasetCreateArgs} args - Arguments to create a Dataset.
     * @example
     * // Create one Dataset
     * const Dataset = await prisma.dataset.create({
     *   data: {
     *     // ... data to create a Dataset
     *   }
     * })
     * 
     */
    create<T extends DatasetCreateArgs>(args: SelectSubset<T, DatasetCreateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datasets.
     * @param {DatasetCreateManyArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetCreateManyArgs>(args?: SelectSubset<T, DatasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datasets and returns the data saved in the database.
     * @param {DatasetCreateManyAndReturnArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dataset.
     * @param {DatasetDeleteArgs} args - Arguments to delete one Dataset.
     * @example
     * // Delete one Dataset
     * const Dataset = await prisma.dataset.delete({
     *   where: {
     *     // ... filter to delete one Dataset
     *   }
     * })
     * 
     */
    delete<T extends DatasetDeleteArgs>(args: SelectSubset<T, DatasetDeleteArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dataset.
     * @param {DatasetUpdateArgs} args - Arguments to update one Dataset.
     * @example
     * // Update one Dataset
     * const dataset = await prisma.dataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetUpdateArgs>(args: SelectSubset<T, DatasetUpdateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datasets.
     * @param {DatasetDeleteManyArgs} args - Arguments to filter Datasets to delete.
     * @example
     * // Delete a few Datasets
     * const { count } = await prisma.dataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetDeleteManyArgs>(args?: SelectSubset<T, DatasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetUpdateManyArgs>(args: SelectSubset<T, DatasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets and returns the data updated in the database.
     * @param {DatasetUpdateManyAndReturnArgs} args - Arguments to update many Datasets.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatasetUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dataset.
     * @param {DatasetUpsertArgs} args - Arguments to update or create a Dataset.
     * @example
     * // Update or create a Dataset
     * const dataset = await prisma.dataset.upsert({
     *   create: {
     *     // ... data to create a Dataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataset we want to update
     *   }
     * })
     */
    upsert<T extends DatasetUpsertArgs>(args: SelectSubset<T, DatasetUpsertArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetCountArgs} args - Arguments to filter Datasets to count.
     * @example
     * // Count the number of Datasets
     * const count = await prisma.dataset.count({
     *   where: {
     *     // ... the filter for the Datasets we want to count
     *   }
     * })
    **/
    count<T extends DatasetCountArgs>(
      args?: Subset<T, DatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatasetAggregateArgs>(args: Subset<T, DatasetAggregateArgs>): Prisma.PrismaPromise<GetDatasetAggregateType<T>>

    /**
     * Group by Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetGroupByArgs['orderBy'] }
        : { orderBy?: DatasetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dataset model
   */
  readonly fields: DatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Dataset$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evalRuns<T extends Dataset$evalRunsArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$evalRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dataset model
   */
  interface DatasetFieldRefs {
    readonly id: FieldRef<"Dataset", 'String'>
    readonly name: FieldRef<"Dataset", 'String'>
    readonly description: FieldRef<"Dataset", 'String'>
    readonly createdAt: FieldRef<"Dataset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dataset findUnique
   */
  export type DatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findUniqueOrThrow
   */
  export type DatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findFirst
   */
  export type DatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findFirstOrThrow
   */
  export type DatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findMany
   */
  export type DatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Datasets to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset create
   */
  export type DatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to create a Dataset.
     */
    data: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
  }

  /**
   * Dataset createMany
   */
  export type DatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset createManyAndReturn
   */
  export type DatasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset update
   */
  export type DatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to update a Dataset.
     */
    data: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
    /**
     * Choose, which Dataset to update.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset updateMany
   */
  export type DatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset updateManyAndReturn
   */
  export type DatasetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset upsert
   */
  export type DatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The filter to search for the Dataset to update in case it exists.
     */
    where: DatasetWhereUniqueInput
    /**
     * In case the Dataset found by the `where` argument doesn't exist, create a new Dataset with this data.
     */
    create: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
    /**
     * In case the Dataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
  }

  /**
   * Dataset delete
   */
  export type DatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter which Dataset to delete.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset deleteMany
   */
  export type DatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasets to delete
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to delete.
     */
    limit?: number
  }

  /**
   * Dataset.documents
   */
  export type Dataset$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    where?: DatasetDocumentWhereInput
    orderBy?: DatasetDocumentOrderByWithRelationInput | DatasetDocumentOrderByWithRelationInput[]
    cursor?: DatasetDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetDocumentScalarFieldEnum | DatasetDocumentScalarFieldEnum[]
  }

  /**
   * Dataset.evalRuns
   */
  export type Dataset$evalRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    where?: EvalRunWhereInput
    orderBy?: EvalRunOrderByWithRelationInput | EvalRunOrderByWithRelationInput[]
    cursor?: EvalRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvalRunScalarFieldEnum | EvalRunScalarFieldEnum[]
  }

  /**
   * Dataset without action
   */
  export type DatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
  }


  /**
   * Model DatasetDocument
   */

  export type AggregateDatasetDocument = {
    _count: DatasetDocumentCountAggregateOutputType | null
    _min: DatasetDocumentMinAggregateOutputType | null
    _max: DatasetDocumentMaxAggregateOutputType | null
  }

  export type DatasetDocumentMinAggregateOutputType = {
    id: string | null
    datasetId: string | null
    documentId: string | null
  }

  export type DatasetDocumentMaxAggregateOutputType = {
    id: string | null
    datasetId: string | null
    documentId: string | null
  }

  export type DatasetDocumentCountAggregateOutputType = {
    id: number
    datasetId: number
    documentId: number
    groundTruth: number
    _all: number
  }


  export type DatasetDocumentMinAggregateInputType = {
    id?: true
    datasetId?: true
    documentId?: true
  }

  export type DatasetDocumentMaxAggregateInputType = {
    id?: true
    datasetId?: true
    documentId?: true
  }

  export type DatasetDocumentCountAggregateInputType = {
    id?: true
    datasetId?: true
    documentId?: true
    groundTruth?: true
    _all?: true
  }

  export type DatasetDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetDocument to aggregate.
     */
    where?: DatasetDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetDocuments to fetch.
     */
    orderBy?: DatasetDocumentOrderByWithRelationInput | DatasetDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatasetDocuments
    **/
    _count?: true | DatasetDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetDocumentMaxAggregateInputType
  }

  export type GetDatasetDocumentAggregateType<T extends DatasetDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDatasetDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatasetDocument[P]>
      : GetScalarType<T[P], AggregateDatasetDocument[P]>
  }




  export type DatasetDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetDocumentWhereInput
    orderBy?: DatasetDocumentOrderByWithAggregationInput | DatasetDocumentOrderByWithAggregationInput[]
    by: DatasetDocumentScalarFieldEnum[] | DatasetDocumentScalarFieldEnum
    having?: DatasetDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetDocumentCountAggregateInputType | true
    _min?: DatasetDocumentMinAggregateInputType
    _max?: DatasetDocumentMaxAggregateInputType
  }

  export type DatasetDocumentGroupByOutputType = {
    id: string
    datasetId: string
    documentId: string
    groundTruth: JsonValue | null
    _count: DatasetDocumentCountAggregateOutputType | null
    _min: DatasetDocumentMinAggregateOutputType | null
    _max: DatasetDocumentMaxAggregateOutputType | null
  }

  type GetDatasetDocumentGroupByPayload<T extends DatasetDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetDocumentGroupByOutputType[P]>
        }
      >
    >


  export type DatasetDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    documentId?: boolean
    groundTruth?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetDocument"]>

  export type DatasetDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    documentId?: boolean
    groundTruth?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetDocument"]>

  export type DatasetDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    documentId?: boolean
    groundTruth?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetDocument"]>

  export type DatasetDocumentSelectScalar = {
    id?: boolean
    datasetId?: boolean
    documentId?: boolean
    groundTruth?: boolean
  }

  export type DatasetDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datasetId" | "documentId" | "groundTruth", ExtArgs["result"]["datasetDocument"]>
  export type DatasetDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DatasetDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type DatasetDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $DatasetDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatasetDocument"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs>
      document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      datasetId: string
      documentId: string
      groundTruth: Prisma.JsonValue | null
    }, ExtArgs["result"]["datasetDocument"]>
    composites: {}
  }

  type DatasetDocumentGetPayload<S extends boolean | null | undefined | DatasetDocumentDefaultArgs> = $Result.GetResult<Prisma.$DatasetDocumentPayload, S>

  type DatasetDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetDocumentCountAggregateInputType | true
    }

  export interface DatasetDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatasetDocument'], meta: { name: 'DatasetDocument' } }
    /**
     * Find zero or one DatasetDocument that matches the filter.
     * @param {DatasetDocumentFindUniqueArgs} args - Arguments to find a DatasetDocument
     * @example
     * // Get one DatasetDocument
     * const datasetDocument = await prisma.datasetDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetDocumentFindUniqueArgs>(args: SelectSubset<T, DatasetDocumentFindUniqueArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatasetDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetDocumentFindUniqueOrThrowArgs} args - Arguments to find a DatasetDocument
     * @example
     * // Get one DatasetDocument
     * const datasetDocument = await prisma.datasetDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetDocumentFindFirstArgs} args - Arguments to find a DatasetDocument
     * @example
     * // Get one DatasetDocument
     * const datasetDocument = await prisma.datasetDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetDocumentFindFirstArgs>(args?: SelectSubset<T, DatasetDocumentFindFirstArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetDocumentFindFirstOrThrowArgs} args - Arguments to find a DatasetDocument
     * @example
     * // Get one DatasetDocument
     * const datasetDocument = await prisma.datasetDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatasetDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatasetDocuments
     * const datasetDocuments = await prisma.datasetDocument.findMany()
     * 
     * // Get first 10 DatasetDocuments
     * const datasetDocuments = await prisma.datasetDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetDocumentWithIdOnly = await prisma.datasetDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetDocumentFindManyArgs>(args?: SelectSubset<T, DatasetDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatasetDocument.
     * @param {DatasetDocumentCreateArgs} args - Arguments to create a DatasetDocument.
     * @example
     * // Create one DatasetDocument
     * const DatasetDocument = await prisma.datasetDocument.create({
     *   data: {
     *     // ... data to create a DatasetDocument
     *   }
     * })
     * 
     */
    create<T extends DatasetDocumentCreateArgs>(args: SelectSubset<T, DatasetDocumentCreateArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatasetDocuments.
     * @param {DatasetDocumentCreateManyArgs} args - Arguments to create many DatasetDocuments.
     * @example
     * // Create many DatasetDocuments
     * const datasetDocument = await prisma.datasetDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetDocumentCreateManyArgs>(args?: SelectSubset<T, DatasetDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DatasetDocuments and returns the data saved in the database.
     * @param {DatasetDocumentCreateManyAndReturnArgs} args - Arguments to create many DatasetDocuments.
     * @example
     * // Create many DatasetDocuments
     * const datasetDocument = await prisma.datasetDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DatasetDocuments and only return the `id`
     * const datasetDocumentWithIdOnly = await prisma.datasetDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DatasetDocument.
     * @param {DatasetDocumentDeleteArgs} args - Arguments to delete one DatasetDocument.
     * @example
     * // Delete one DatasetDocument
     * const DatasetDocument = await prisma.datasetDocument.delete({
     *   where: {
     *     // ... filter to delete one DatasetDocument
     *   }
     * })
     * 
     */
    delete<T extends DatasetDocumentDeleteArgs>(args: SelectSubset<T, DatasetDocumentDeleteArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatasetDocument.
     * @param {DatasetDocumentUpdateArgs} args - Arguments to update one DatasetDocument.
     * @example
     * // Update one DatasetDocument
     * const datasetDocument = await prisma.datasetDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetDocumentUpdateArgs>(args: SelectSubset<T, DatasetDocumentUpdateArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatasetDocuments.
     * @param {DatasetDocumentDeleteManyArgs} args - Arguments to filter DatasetDocuments to delete.
     * @example
     * // Delete a few DatasetDocuments
     * const { count } = await prisma.datasetDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetDocumentDeleteManyArgs>(args?: SelectSubset<T, DatasetDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatasetDocuments
     * const datasetDocument = await prisma.datasetDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetDocumentUpdateManyArgs>(args: SelectSubset<T, DatasetDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetDocuments and returns the data updated in the database.
     * @param {DatasetDocumentUpdateManyAndReturnArgs} args - Arguments to update many DatasetDocuments.
     * @example
     * // Update many DatasetDocuments
     * const datasetDocument = await prisma.datasetDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DatasetDocuments and only return the `id`
     * const datasetDocumentWithIdOnly = await prisma.datasetDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatasetDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DatasetDocument.
     * @param {DatasetDocumentUpsertArgs} args - Arguments to update or create a DatasetDocument.
     * @example
     * // Update or create a DatasetDocument
     * const datasetDocument = await prisma.datasetDocument.upsert({
     *   create: {
     *     // ... data to create a DatasetDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatasetDocument we want to update
     *   }
     * })
     */
    upsert<T extends DatasetDocumentUpsertArgs>(args: SelectSubset<T, DatasetDocumentUpsertArgs<ExtArgs>>): Prisma__DatasetDocumentClient<$Result.GetResult<Prisma.$DatasetDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatasetDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetDocumentCountArgs} args - Arguments to filter DatasetDocuments to count.
     * @example
     * // Count the number of DatasetDocuments
     * const count = await prisma.datasetDocument.count({
     *   where: {
     *     // ... the filter for the DatasetDocuments we want to count
     *   }
     * })
    **/
    count<T extends DatasetDocumentCountArgs>(
      args?: Subset<T, DatasetDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatasetDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatasetDocumentAggregateArgs>(args: Subset<T, DatasetDocumentAggregateArgs>): Prisma.PrismaPromise<GetDatasetDocumentAggregateType<T>>

    /**
     * Group by DatasetDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatasetDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetDocumentGroupByArgs['orderBy'] }
        : { orderBy?: DatasetDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatasetDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatasetDocument model
   */
  readonly fields: DatasetDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatasetDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DatasetDocument model
   */
  interface DatasetDocumentFieldRefs {
    readonly id: FieldRef<"DatasetDocument", 'String'>
    readonly datasetId: FieldRef<"DatasetDocument", 'String'>
    readonly documentId: FieldRef<"DatasetDocument", 'String'>
    readonly groundTruth: FieldRef<"DatasetDocument", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DatasetDocument findUnique
   */
  export type DatasetDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DatasetDocument to fetch.
     */
    where: DatasetDocumentWhereUniqueInput
  }

  /**
   * DatasetDocument findUniqueOrThrow
   */
  export type DatasetDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DatasetDocument to fetch.
     */
    where: DatasetDocumentWhereUniqueInput
  }

  /**
   * DatasetDocument findFirst
   */
  export type DatasetDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DatasetDocument to fetch.
     */
    where?: DatasetDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetDocuments to fetch.
     */
    orderBy?: DatasetDocumentOrderByWithRelationInput | DatasetDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetDocuments.
     */
    cursor?: DatasetDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetDocuments.
     */
    distinct?: DatasetDocumentScalarFieldEnum | DatasetDocumentScalarFieldEnum[]
  }

  /**
   * DatasetDocument findFirstOrThrow
   */
  export type DatasetDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DatasetDocument to fetch.
     */
    where?: DatasetDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetDocuments to fetch.
     */
    orderBy?: DatasetDocumentOrderByWithRelationInput | DatasetDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetDocuments.
     */
    cursor?: DatasetDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetDocuments.
     */
    distinct?: DatasetDocumentScalarFieldEnum | DatasetDocumentScalarFieldEnum[]
  }

  /**
   * DatasetDocument findMany
   */
  export type DatasetDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DatasetDocuments to fetch.
     */
    where?: DatasetDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetDocuments to fetch.
     */
    orderBy?: DatasetDocumentOrderByWithRelationInput | DatasetDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatasetDocuments.
     */
    cursor?: DatasetDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetDocuments.
     */
    skip?: number
    distinct?: DatasetDocumentScalarFieldEnum | DatasetDocumentScalarFieldEnum[]
  }

  /**
   * DatasetDocument create
   */
  export type DatasetDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a DatasetDocument.
     */
    data: XOR<DatasetDocumentCreateInput, DatasetDocumentUncheckedCreateInput>
  }

  /**
   * DatasetDocument createMany
   */
  export type DatasetDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatasetDocuments.
     */
    data: DatasetDocumentCreateManyInput | DatasetDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatasetDocument createManyAndReturn
   */
  export type DatasetDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many DatasetDocuments.
     */
    data: DatasetDocumentCreateManyInput | DatasetDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetDocument update
   */
  export type DatasetDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a DatasetDocument.
     */
    data: XOR<DatasetDocumentUpdateInput, DatasetDocumentUncheckedUpdateInput>
    /**
     * Choose, which DatasetDocument to update.
     */
    where: DatasetDocumentWhereUniqueInput
  }

  /**
   * DatasetDocument updateMany
   */
  export type DatasetDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatasetDocuments.
     */
    data: XOR<DatasetDocumentUpdateManyMutationInput, DatasetDocumentUncheckedUpdateManyInput>
    /**
     * Filter which DatasetDocuments to update
     */
    where?: DatasetDocumentWhereInput
    /**
     * Limit how many DatasetDocuments to update.
     */
    limit?: number
  }

  /**
   * DatasetDocument updateManyAndReturn
   */
  export type DatasetDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * The data used to update DatasetDocuments.
     */
    data: XOR<DatasetDocumentUpdateManyMutationInput, DatasetDocumentUncheckedUpdateManyInput>
    /**
     * Filter which DatasetDocuments to update
     */
    where?: DatasetDocumentWhereInput
    /**
     * Limit how many DatasetDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetDocument upsert
   */
  export type DatasetDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the DatasetDocument to update in case it exists.
     */
    where: DatasetDocumentWhereUniqueInput
    /**
     * In case the DatasetDocument found by the `where` argument doesn't exist, create a new DatasetDocument with this data.
     */
    create: XOR<DatasetDocumentCreateInput, DatasetDocumentUncheckedCreateInput>
    /**
     * In case the DatasetDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetDocumentUpdateInput, DatasetDocumentUncheckedUpdateInput>
  }

  /**
   * DatasetDocument delete
   */
  export type DatasetDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
    /**
     * Filter which DatasetDocument to delete.
     */
    where: DatasetDocumentWhereUniqueInput
  }

  /**
   * DatasetDocument deleteMany
   */
  export type DatasetDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetDocuments to delete
     */
    where?: DatasetDocumentWhereInput
    /**
     * Limit how many DatasetDocuments to delete.
     */
    limit?: number
  }

  /**
   * DatasetDocument without action
   */
  export type DatasetDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetDocument
     */
    select?: DatasetDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetDocument
     */
    omit?: DatasetDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetDocumentInclude<ExtArgs> | null
  }


  /**
   * Model PromptTemplate
   */

  export type AggregatePromptTemplate = {
    _count: PromptTemplateCountAggregateOutputType | null
    _avg: PromptTemplateAvgAggregateOutputType | null
    _sum: PromptTemplateSumAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  export type PromptTemplateAvgAggregateOutputType = {
    version: number | null
  }

  export type PromptTemplateSumAggregateOutputType = {
    version: number | null
  }

  export type PromptTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: number | null
    systemPrompt: string | null
    userPrompt: string | null
    node: string | null
    createdAt: Date | null
  }

  export type PromptTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: number | null
    systemPrompt: string | null
    userPrompt: string | null
    node: string | null
    createdAt: Date | null
  }

  export type PromptTemplateCountAggregateOutputType = {
    id: number
    name: number
    version: number
    systemPrompt: number
    userPrompt: number
    outputSchema: number
    node: number
    createdAt: number
    _all: number
  }


  export type PromptTemplateAvgAggregateInputType = {
    version?: true
  }

  export type PromptTemplateSumAggregateInputType = {
    version?: true
  }

  export type PromptTemplateMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    systemPrompt?: true
    userPrompt?: true
    node?: true
    createdAt?: true
  }

  export type PromptTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    systemPrompt?: true
    userPrompt?: true
    node?: true
    createdAt?: true
  }

  export type PromptTemplateCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    systemPrompt?: true
    userPrompt?: true
    outputSchema?: true
    node?: true
    createdAt?: true
    _all?: true
  }

  export type PromptTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplate to aggregate.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptTemplates
    **/
    _count?: true | PromptTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type GetPromptTemplateAggregateType<T extends PromptTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptTemplate[P]>
      : GetScalarType<T[P], AggregatePromptTemplate[P]>
  }




  export type PromptTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTemplateWhereInput
    orderBy?: PromptTemplateOrderByWithAggregationInput | PromptTemplateOrderByWithAggregationInput[]
    by: PromptTemplateScalarFieldEnum[] | PromptTemplateScalarFieldEnum
    having?: PromptTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptTemplateCountAggregateInputType | true
    _avg?: PromptTemplateAvgAggregateInputType
    _sum?: PromptTemplateSumAggregateInputType
    _min?: PromptTemplateMinAggregateInputType
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type PromptTemplateGroupByOutputType = {
    id: string
    name: string
    version: number
    systemPrompt: string
    userPrompt: string
    outputSchema: JsonValue | null
    node: string | null
    createdAt: Date
    _count: PromptTemplateCountAggregateOutputType | null
    _avg: PromptTemplateAvgAggregateOutputType | null
    _sum: PromptTemplateSumAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  type GetPromptTemplateGroupByPayload<T extends PromptTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PromptTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    systemPrompt?: boolean
    userPrompt?: boolean
    outputSchema?: boolean
    node?: boolean
    createdAt?: boolean
    evalRuns?: boolean | PromptTemplate$evalRunsArgs<ExtArgs>
    _count?: boolean | PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    systemPrompt?: boolean
    userPrompt?: boolean
    outputSchema?: boolean
    node?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    systemPrompt?: boolean
    userPrompt?: boolean
    outputSchema?: boolean
    node?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    systemPrompt?: boolean
    userPrompt?: boolean
    outputSchema?: boolean
    node?: boolean
    createdAt?: boolean
  }

  export type PromptTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "version" | "systemPrompt" | "userPrompt" | "outputSchema" | "node" | "createdAt", ExtArgs["result"]["promptTemplate"]>
  export type PromptTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRuns?: boolean | PromptTemplate$evalRunsArgs<ExtArgs>
    _count?: boolean | PromptTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromptTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromptTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptTemplate"
    objects: {
      evalRuns: Prisma.$EvalRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: number
      systemPrompt: string
      userPrompt: string
      outputSchema: Prisma.JsonValue | null
      node: string | null
      createdAt: Date
    }, ExtArgs["result"]["promptTemplate"]>
    composites: {}
  }

  type PromptTemplateGetPayload<S extends boolean | null | undefined | PromptTemplateDefaultArgs> = $Result.GetResult<Prisma.$PromptTemplatePayload, S>

  type PromptTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptTemplateCountAggregateInputType | true
    }

  export interface PromptTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptTemplate'], meta: { name: 'PromptTemplate' } }
    /**
     * Find zero or one PromptTemplate that matches the filter.
     * @param {PromptTemplateFindUniqueArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptTemplateFindUniqueArgs>(args: SelectSubset<T, PromptTemplateFindUniqueArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptTemplateFindUniqueOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptTemplateFindFirstArgs>(args?: SelectSubset<T, PromptTemplateFindFirstArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany()
     * 
     * // Get first 10 PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptTemplateFindManyArgs>(args?: SelectSubset<T, PromptTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptTemplate.
     * @param {PromptTemplateCreateArgs} args - Arguments to create a PromptTemplate.
     * @example
     * // Create one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.create({
     *   data: {
     *     // ... data to create a PromptTemplate
     *   }
     * })
     * 
     */
    create<T extends PromptTemplateCreateArgs>(args: SelectSubset<T, PromptTemplateCreateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptTemplates.
     * @param {PromptTemplateCreateManyArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptTemplateCreateManyArgs>(args?: SelectSubset<T, PromptTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptTemplates and returns the data saved in the database.
     * @param {PromptTemplateCreateManyAndReturnArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptTemplate.
     * @param {PromptTemplateDeleteArgs} args - Arguments to delete one PromptTemplate.
     * @example
     * // Delete one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.delete({
     *   where: {
     *     // ... filter to delete one PromptTemplate
     *   }
     * })
     * 
     */
    delete<T extends PromptTemplateDeleteArgs>(args: SelectSubset<T, PromptTemplateDeleteArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptTemplate.
     * @param {PromptTemplateUpdateArgs} args - Arguments to update one PromptTemplate.
     * @example
     * // Update one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptTemplateUpdateArgs>(args: SelectSubset<T, PromptTemplateUpdateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptTemplates.
     * @param {PromptTemplateDeleteManyArgs} args - Arguments to filter PromptTemplates to delete.
     * @example
     * // Delete a few PromptTemplates
     * const { count } = await prisma.promptTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptTemplateDeleteManyArgs>(args?: SelectSubset<T, PromptTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptTemplateUpdateManyArgs>(args: SelectSubset<T, PromptTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates and returns the data updated in the database.
     * @param {PromptTemplateUpdateManyAndReturnArgs} args - Arguments to update many PromptTemplates.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromptTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptTemplate.
     * @param {PromptTemplateUpsertArgs} args - Arguments to update or create a PromptTemplate.
     * @example
     * // Update or create a PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.upsert({
     *   create: {
     *     // ... data to create a PromptTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PromptTemplateUpsertArgs>(args: SelectSubset<T, PromptTemplateUpsertArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateCountArgs} args - Arguments to filter PromptTemplates to count.
     * @example
     * // Count the number of PromptTemplates
     * const count = await prisma.promptTemplate.count({
     *   where: {
     *     // ... the filter for the PromptTemplates we want to count
     *   }
     * })
    **/
    count<T extends PromptTemplateCountArgs>(
      args?: Subset<T, PromptTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptTemplateAggregateArgs>(args: Subset<T, PromptTemplateAggregateArgs>): Prisma.PrismaPromise<GetPromptTemplateAggregateType<T>>

    /**
     * Group by PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PromptTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptTemplate model
   */
  readonly fields: PromptTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evalRuns<T extends PromptTemplate$evalRunsArgs<ExtArgs> = {}>(args?: Subset<T, PromptTemplate$evalRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromptTemplate model
   */
  interface PromptTemplateFieldRefs {
    readonly id: FieldRef<"PromptTemplate", 'String'>
    readonly name: FieldRef<"PromptTemplate", 'String'>
    readonly version: FieldRef<"PromptTemplate", 'Int'>
    readonly systemPrompt: FieldRef<"PromptTemplate", 'String'>
    readonly userPrompt: FieldRef<"PromptTemplate", 'String'>
    readonly outputSchema: FieldRef<"PromptTemplate", 'Json'>
    readonly node: FieldRef<"PromptTemplate", 'String'>
    readonly createdAt: FieldRef<"PromptTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptTemplate findUnique
   */
  export type PromptTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findUniqueOrThrow
   */
  export type PromptTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findFirst
   */
  export type PromptTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findFirstOrThrow
   */
  export type PromptTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findMany
   */
  export type PromptTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter, which PromptTemplates to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate create
   */
  export type PromptTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptTemplate.
     */
    data: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
  }

  /**
   * PromptTemplate createMany
   */
  export type PromptTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate createManyAndReturn
   */
  export type PromptTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate update
   */
  export type PromptTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptTemplate.
     */
    data: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
    /**
     * Choose, which PromptTemplate to update.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate updateMany
   */
  export type PromptTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to update.
     */
    limit?: number
  }

  /**
   * PromptTemplate updateManyAndReturn
   */
  export type PromptTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to update.
     */
    limit?: number
  }

  /**
   * PromptTemplate upsert
   */
  export type PromptTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptTemplate to update in case it exists.
     */
    where: PromptTemplateWhereUniqueInput
    /**
     * In case the PromptTemplate found by the `where` argument doesn't exist, create a new PromptTemplate with this data.
     */
    create: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
    /**
     * In case the PromptTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
  }

  /**
   * PromptTemplate delete
   */
  export type PromptTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
    /**
     * Filter which PromptTemplate to delete.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate deleteMany
   */
  export type PromptTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplates to delete
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to delete.
     */
    limit?: number
  }

  /**
   * PromptTemplate.evalRuns
   */
  export type PromptTemplate$evalRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    where?: EvalRunWhereInput
    orderBy?: EvalRunOrderByWithRelationInput | EvalRunOrderByWithRelationInput[]
    cursor?: EvalRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvalRunScalarFieldEnum | EvalRunScalarFieldEnum[]
  }

  /**
   * PromptTemplate without action
   */
  export type PromptTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptTemplateInclude<ExtArgs> | null
  }


  /**
   * Model ModelConfig
   */

  export type AggregateModelConfig = {
    _count: ModelConfigCountAggregateOutputType | null
    _min: ModelConfigMinAggregateOutputType | null
    _max: ModelConfigMaxAggregateOutputType | null
  }

  export type ModelConfigMinAggregateOutputType = {
    id: string | null
    provider: string | null
    modelId: string | null
    displayName: string | null
    isActive: boolean | null
  }

  export type ModelConfigMaxAggregateOutputType = {
    id: string | null
    provider: string | null
    modelId: string | null
    displayName: string | null
    isActive: boolean | null
  }

  export type ModelConfigCountAggregateOutputType = {
    id: number
    provider: number
    modelId: number
    displayName: number
    isActive: number
    _all: number
  }


  export type ModelConfigMinAggregateInputType = {
    id?: true
    provider?: true
    modelId?: true
    displayName?: true
    isActive?: true
  }

  export type ModelConfigMaxAggregateInputType = {
    id?: true
    provider?: true
    modelId?: true
    displayName?: true
    isActive?: true
  }

  export type ModelConfigCountAggregateInputType = {
    id?: true
    provider?: true
    modelId?: true
    displayName?: true
    isActive?: true
    _all?: true
  }

  export type ModelConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelConfig to aggregate.
     */
    where?: ModelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelConfigs to fetch.
     */
    orderBy?: ModelConfigOrderByWithRelationInput | ModelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelConfigs
    **/
    _count?: true | ModelConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelConfigMaxAggregateInputType
  }

  export type GetModelConfigAggregateType<T extends ModelConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateModelConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelConfig[P]>
      : GetScalarType<T[P], AggregateModelConfig[P]>
  }




  export type ModelConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelConfigWhereInput
    orderBy?: ModelConfigOrderByWithAggregationInput | ModelConfigOrderByWithAggregationInput[]
    by: ModelConfigScalarFieldEnum[] | ModelConfigScalarFieldEnum
    having?: ModelConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelConfigCountAggregateInputType | true
    _min?: ModelConfigMinAggregateInputType
    _max?: ModelConfigMaxAggregateInputType
  }

  export type ModelConfigGroupByOutputType = {
    id: string
    provider: string
    modelId: string
    displayName: string
    isActive: boolean
    _count: ModelConfigCountAggregateOutputType | null
    _min: ModelConfigMinAggregateOutputType | null
    _max: ModelConfigMaxAggregateOutputType | null
  }

  type GetModelConfigGroupByPayload<T extends ModelConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ModelConfigGroupByOutputType[P]>
        }
      >
    >


  export type ModelConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    modelId?: boolean
    displayName?: boolean
    isActive?: boolean
    evalRuns?: boolean | ModelConfig$evalRunsArgs<ExtArgs>
    _count?: boolean | ModelConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelConfig"]>

  export type ModelConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    modelId?: boolean
    displayName?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["modelConfig"]>

  export type ModelConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    modelId?: boolean
    displayName?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["modelConfig"]>

  export type ModelConfigSelectScalar = {
    id?: boolean
    provider?: boolean
    modelId?: boolean
    displayName?: boolean
    isActive?: boolean
  }

  export type ModelConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "modelId" | "displayName" | "isActive", ExtArgs["result"]["modelConfig"]>
  export type ModelConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRuns?: boolean | ModelConfig$evalRunsArgs<ExtArgs>
    _count?: boolean | ModelConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ModelConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModelConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelConfig"
    objects: {
      evalRuns: Prisma.$EvalRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      provider: string
      modelId: string
      displayName: string
      isActive: boolean
    }, ExtArgs["result"]["modelConfig"]>
    composites: {}
  }

  type ModelConfigGetPayload<S extends boolean | null | undefined | ModelConfigDefaultArgs> = $Result.GetResult<Prisma.$ModelConfigPayload, S>

  type ModelConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelConfigCountAggregateInputType | true
    }

  export interface ModelConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelConfig'], meta: { name: 'ModelConfig' } }
    /**
     * Find zero or one ModelConfig that matches the filter.
     * @param {ModelConfigFindUniqueArgs} args - Arguments to find a ModelConfig
     * @example
     * // Get one ModelConfig
     * const modelConfig = await prisma.modelConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelConfigFindUniqueArgs>(args: SelectSubset<T, ModelConfigFindUniqueArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelConfigFindUniqueOrThrowArgs} args - Arguments to find a ModelConfig
     * @example
     * // Get one ModelConfig
     * const modelConfig = await prisma.modelConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelConfigFindFirstArgs} args - Arguments to find a ModelConfig
     * @example
     * // Get one ModelConfig
     * const modelConfig = await prisma.modelConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelConfigFindFirstArgs>(args?: SelectSubset<T, ModelConfigFindFirstArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelConfigFindFirstOrThrowArgs} args - Arguments to find a ModelConfig
     * @example
     * // Get one ModelConfig
     * const modelConfig = await prisma.modelConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelConfigs
     * const modelConfigs = await prisma.modelConfig.findMany()
     * 
     * // Get first 10 ModelConfigs
     * const modelConfigs = await prisma.modelConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelConfigWithIdOnly = await prisma.modelConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelConfigFindManyArgs>(args?: SelectSubset<T, ModelConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelConfig.
     * @param {ModelConfigCreateArgs} args - Arguments to create a ModelConfig.
     * @example
     * // Create one ModelConfig
     * const ModelConfig = await prisma.modelConfig.create({
     *   data: {
     *     // ... data to create a ModelConfig
     *   }
     * })
     * 
     */
    create<T extends ModelConfigCreateArgs>(args: SelectSubset<T, ModelConfigCreateArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelConfigs.
     * @param {ModelConfigCreateManyArgs} args - Arguments to create many ModelConfigs.
     * @example
     * // Create many ModelConfigs
     * const modelConfig = await prisma.modelConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelConfigCreateManyArgs>(args?: SelectSubset<T, ModelConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelConfigs and returns the data saved in the database.
     * @param {ModelConfigCreateManyAndReturnArgs} args - Arguments to create many ModelConfigs.
     * @example
     * // Create many ModelConfigs
     * const modelConfig = await prisma.modelConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelConfigs and only return the `id`
     * const modelConfigWithIdOnly = await prisma.modelConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelConfig.
     * @param {ModelConfigDeleteArgs} args - Arguments to delete one ModelConfig.
     * @example
     * // Delete one ModelConfig
     * const ModelConfig = await prisma.modelConfig.delete({
     *   where: {
     *     // ... filter to delete one ModelConfig
     *   }
     * })
     * 
     */
    delete<T extends ModelConfigDeleteArgs>(args: SelectSubset<T, ModelConfigDeleteArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelConfig.
     * @param {ModelConfigUpdateArgs} args - Arguments to update one ModelConfig.
     * @example
     * // Update one ModelConfig
     * const modelConfig = await prisma.modelConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelConfigUpdateArgs>(args: SelectSubset<T, ModelConfigUpdateArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelConfigs.
     * @param {ModelConfigDeleteManyArgs} args - Arguments to filter ModelConfigs to delete.
     * @example
     * // Delete a few ModelConfigs
     * const { count } = await prisma.modelConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelConfigDeleteManyArgs>(args?: SelectSubset<T, ModelConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelConfigs
     * const modelConfig = await prisma.modelConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelConfigUpdateManyArgs>(args: SelectSubset<T, ModelConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelConfigs and returns the data updated in the database.
     * @param {ModelConfigUpdateManyAndReturnArgs} args - Arguments to update many ModelConfigs.
     * @example
     * // Update many ModelConfigs
     * const modelConfig = await prisma.modelConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelConfigs and only return the `id`
     * const modelConfigWithIdOnly = await prisma.modelConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelConfig.
     * @param {ModelConfigUpsertArgs} args - Arguments to update or create a ModelConfig.
     * @example
     * // Update or create a ModelConfig
     * const modelConfig = await prisma.modelConfig.upsert({
     *   create: {
     *     // ... data to create a ModelConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelConfig we want to update
     *   }
     * })
     */
    upsert<T extends ModelConfigUpsertArgs>(args: SelectSubset<T, ModelConfigUpsertArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelConfigCountArgs} args - Arguments to filter ModelConfigs to count.
     * @example
     * // Count the number of ModelConfigs
     * const count = await prisma.modelConfig.count({
     *   where: {
     *     // ... the filter for the ModelConfigs we want to count
     *   }
     * })
    **/
    count<T extends ModelConfigCountArgs>(
      args?: Subset<T, ModelConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelConfigAggregateArgs>(args: Subset<T, ModelConfigAggregateArgs>): Prisma.PrismaPromise<GetModelConfigAggregateType<T>>

    /**
     * Group by ModelConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelConfigGroupByArgs['orderBy'] }
        : { orderBy?: ModelConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelConfig model
   */
  readonly fields: ModelConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evalRuns<T extends ModelConfig$evalRunsArgs<ExtArgs> = {}>(args?: Subset<T, ModelConfig$evalRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelConfig model
   */
  interface ModelConfigFieldRefs {
    readonly id: FieldRef<"ModelConfig", 'String'>
    readonly provider: FieldRef<"ModelConfig", 'String'>
    readonly modelId: FieldRef<"ModelConfig", 'String'>
    readonly displayName: FieldRef<"ModelConfig", 'String'>
    readonly isActive: FieldRef<"ModelConfig", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ModelConfig findUnique
   */
  export type ModelConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * Filter, which ModelConfig to fetch.
     */
    where: ModelConfigWhereUniqueInput
  }

  /**
   * ModelConfig findUniqueOrThrow
   */
  export type ModelConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * Filter, which ModelConfig to fetch.
     */
    where: ModelConfigWhereUniqueInput
  }

  /**
   * ModelConfig findFirst
   */
  export type ModelConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * Filter, which ModelConfig to fetch.
     */
    where?: ModelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelConfigs to fetch.
     */
    orderBy?: ModelConfigOrderByWithRelationInput | ModelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelConfigs.
     */
    cursor?: ModelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelConfigs.
     */
    distinct?: ModelConfigScalarFieldEnum | ModelConfigScalarFieldEnum[]
  }

  /**
   * ModelConfig findFirstOrThrow
   */
  export type ModelConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * Filter, which ModelConfig to fetch.
     */
    where?: ModelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelConfigs to fetch.
     */
    orderBy?: ModelConfigOrderByWithRelationInput | ModelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelConfigs.
     */
    cursor?: ModelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelConfigs.
     */
    distinct?: ModelConfigScalarFieldEnum | ModelConfigScalarFieldEnum[]
  }

  /**
   * ModelConfig findMany
   */
  export type ModelConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * Filter, which ModelConfigs to fetch.
     */
    where?: ModelConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelConfigs to fetch.
     */
    orderBy?: ModelConfigOrderByWithRelationInput | ModelConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelConfigs.
     */
    cursor?: ModelConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelConfigs.
     */
    skip?: number
    distinct?: ModelConfigScalarFieldEnum | ModelConfigScalarFieldEnum[]
  }

  /**
   * ModelConfig create
   */
  export type ModelConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelConfig.
     */
    data: XOR<ModelConfigCreateInput, ModelConfigUncheckedCreateInput>
  }

  /**
   * ModelConfig createMany
   */
  export type ModelConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelConfigs.
     */
    data: ModelConfigCreateManyInput | ModelConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelConfig createManyAndReturn
   */
  export type ModelConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * The data used to create many ModelConfigs.
     */
    data: ModelConfigCreateManyInput | ModelConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelConfig update
   */
  export type ModelConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelConfig.
     */
    data: XOR<ModelConfigUpdateInput, ModelConfigUncheckedUpdateInput>
    /**
     * Choose, which ModelConfig to update.
     */
    where: ModelConfigWhereUniqueInput
  }

  /**
   * ModelConfig updateMany
   */
  export type ModelConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelConfigs.
     */
    data: XOR<ModelConfigUpdateManyMutationInput, ModelConfigUncheckedUpdateManyInput>
    /**
     * Filter which ModelConfigs to update
     */
    where?: ModelConfigWhereInput
    /**
     * Limit how many ModelConfigs to update.
     */
    limit?: number
  }

  /**
   * ModelConfig updateManyAndReturn
   */
  export type ModelConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * The data used to update ModelConfigs.
     */
    data: XOR<ModelConfigUpdateManyMutationInput, ModelConfigUncheckedUpdateManyInput>
    /**
     * Filter which ModelConfigs to update
     */
    where?: ModelConfigWhereInput
    /**
     * Limit how many ModelConfigs to update.
     */
    limit?: number
  }

  /**
   * ModelConfig upsert
   */
  export type ModelConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelConfig to update in case it exists.
     */
    where: ModelConfigWhereUniqueInput
    /**
     * In case the ModelConfig found by the `where` argument doesn't exist, create a new ModelConfig with this data.
     */
    create: XOR<ModelConfigCreateInput, ModelConfigUncheckedCreateInput>
    /**
     * In case the ModelConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelConfigUpdateInput, ModelConfigUncheckedUpdateInput>
  }

  /**
   * ModelConfig delete
   */
  export type ModelConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
    /**
     * Filter which ModelConfig to delete.
     */
    where: ModelConfigWhereUniqueInput
  }

  /**
   * ModelConfig deleteMany
   */
  export type ModelConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelConfigs to delete
     */
    where?: ModelConfigWhereInput
    /**
     * Limit how many ModelConfigs to delete.
     */
    limit?: number
  }

  /**
   * ModelConfig.evalRuns
   */
  export type ModelConfig$evalRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    where?: EvalRunWhereInput
    orderBy?: EvalRunOrderByWithRelationInput | EvalRunOrderByWithRelationInput[]
    cursor?: EvalRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvalRunScalarFieldEnum | EvalRunScalarFieldEnum[]
  }

  /**
   * ModelConfig without action
   */
  export type ModelConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelConfig
     */
    select?: ModelConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelConfig
     */
    omit?: ModelConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelConfigInclude<ExtArgs> | null
  }


  /**
   * Model EvalRun
   */

  export type AggregateEvalRun = {
    _count: EvalRunCountAggregateOutputType | null
    _min: EvalRunMinAggregateOutputType | null
    _max: EvalRunMaxAggregateOutputType | null
  }

  export type EvalRunMinAggregateOutputType = {
    id: string | null
    datasetId: string | null
    promptId: string | null
    modelConfigId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type EvalRunMaxAggregateOutputType = {
    id: string | null
    datasetId: string | null
    promptId: string | null
    modelConfigId: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type EvalRunCountAggregateOutputType = {
    id: number
    datasetId: number
    promptId: number
    modelConfigId: number
    status: number
    startedAt: number
    completedAt: number
    aggregateScore: number
    createdAt: number
    _all: number
  }


  export type EvalRunMinAggregateInputType = {
    id?: true
    datasetId?: true
    promptId?: true
    modelConfigId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type EvalRunMaxAggregateInputType = {
    id?: true
    datasetId?: true
    promptId?: true
    modelConfigId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type EvalRunCountAggregateInputType = {
    id?: true
    datasetId?: true
    promptId?: true
    modelConfigId?: true
    status?: true
    startedAt?: true
    completedAt?: true
    aggregateScore?: true
    createdAt?: true
    _all?: true
  }

  export type EvalRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalRun to aggregate.
     */
    where?: EvalRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRuns to fetch.
     */
    orderBy?: EvalRunOrderByWithRelationInput | EvalRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvalRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvalRuns
    **/
    _count?: true | EvalRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvalRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvalRunMaxAggregateInputType
  }

  export type GetEvalRunAggregateType<T extends EvalRunAggregateArgs> = {
        [P in keyof T & keyof AggregateEvalRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvalRun[P]>
      : GetScalarType<T[P], AggregateEvalRun[P]>
  }




  export type EvalRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalRunWhereInput
    orderBy?: EvalRunOrderByWithAggregationInput | EvalRunOrderByWithAggregationInput[]
    by: EvalRunScalarFieldEnum[] | EvalRunScalarFieldEnum
    having?: EvalRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvalRunCountAggregateInputType | true
    _min?: EvalRunMinAggregateInputType
    _max?: EvalRunMaxAggregateInputType
  }

  export type EvalRunGroupByOutputType = {
    id: string
    datasetId: string
    promptId: string
    modelConfigId: string
    status: string
    startedAt: Date | null
    completedAt: Date | null
    aggregateScore: JsonValue | null
    createdAt: Date
    _count: EvalRunCountAggregateOutputType | null
    _min: EvalRunMinAggregateOutputType | null
    _max: EvalRunMaxAggregateOutputType | null
  }

  type GetEvalRunGroupByPayload<T extends EvalRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvalRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvalRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvalRunGroupByOutputType[P]>
            : GetScalarType<T[P], EvalRunGroupByOutputType[P]>
        }
      >
    >


  export type EvalRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    promptId?: boolean
    modelConfigId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    aggregateScore?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    prompt?: boolean | PromptTemplateDefaultArgs<ExtArgs>
    modelConfig?: boolean | ModelConfigDefaultArgs<ExtArgs>
    results?: boolean | EvalRun$resultsArgs<ExtArgs>
    _count?: boolean | EvalRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalRun"]>

  export type EvalRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    promptId?: boolean
    modelConfigId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    aggregateScore?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    prompt?: boolean | PromptTemplateDefaultArgs<ExtArgs>
    modelConfig?: boolean | ModelConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalRun"]>

  export type EvalRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datasetId?: boolean
    promptId?: boolean
    modelConfigId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    aggregateScore?: boolean
    createdAt?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    prompt?: boolean | PromptTemplateDefaultArgs<ExtArgs>
    modelConfig?: boolean | ModelConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalRun"]>

  export type EvalRunSelectScalar = {
    id?: boolean
    datasetId?: boolean
    promptId?: boolean
    modelConfigId?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    aggregateScore?: boolean
    createdAt?: boolean
  }

  export type EvalRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datasetId" | "promptId" | "modelConfigId" | "status" | "startedAt" | "completedAt" | "aggregateScore" | "createdAt", ExtArgs["result"]["evalRun"]>
  export type EvalRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    prompt?: boolean | PromptTemplateDefaultArgs<ExtArgs>
    modelConfig?: boolean | ModelConfigDefaultArgs<ExtArgs>
    results?: boolean | EvalRun$resultsArgs<ExtArgs>
    _count?: boolean | EvalRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EvalRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    prompt?: boolean | PromptTemplateDefaultArgs<ExtArgs>
    modelConfig?: boolean | ModelConfigDefaultArgs<ExtArgs>
  }
  export type EvalRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    prompt?: boolean | PromptTemplateDefaultArgs<ExtArgs>
    modelConfig?: boolean | ModelConfigDefaultArgs<ExtArgs>
  }

  export type $EvalRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvalRun"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs>
      prompt: Prisma.$PromptTemplatePayload<ExtArgs>
      modelConfig: Prisma.$ModelConfigPayload<ExtArgs>
      results: Prisma.$EvalResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      datasetId: string
      promptId: string
      modelConfigId: string
      status: string
      startedAt: Date | null
      completedAt: Date | null
      aggregateScore: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["evalRun"]>
    composites: {}
  }

  type EvalRunGetPayload<S extends boolean | null | undefined | EvalRunDefaultArgs> = $Result.GetResult<Prisma.$EvalRunPayload, S>

  type EvalRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvalRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvalRunCountAggregateInputType | true
    }

  export interface EvalRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvalRun'], meta: { name: 'EvalRun' } }
    /**
     * Find zero or one EvalRun that matches the filter.
     * @param {EvalRunFindUniqueArgs} args - Arguments to find a EvalRun
     * @example
     * // Get one EvalRun
     * const evalRun = await prisma.evalRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvalRunFindUniqueArgs>(args: SelectSubset<T, EvalRunFindUniqueArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvalRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvalRunFindUniqueOrThrowArgs} args - Arguments to find a EvalRun
     * @example
     * // Get one EvalRun
     * const evalRun = await prisma.evalRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvalRunFindUniqueOrThrowArgs>(args: SelectSubset<T, EvalRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRunFindFirstArgs} args - Arguments to find a EvalRun
     * @example
     * // Get one EvalRun
     * const evalRun = await prisma.evalRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvalRunFindFirstArgs>(args?: SelectSubset<T, EvalRunFindFirstArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRunFindFirstOrThrowArgs} args - Arguments to find a EvalRun
     * @example
     * // Get one EvalRun
     * const evalRun = await prisma.evalRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvalRunFindFirstOrThrowArgs>(args?: SelectSubset<T, EvalRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvalRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvalRuns
     * const evalRuns = await prisma.evalRun.findMany()
     * 
     * // Get first 10 EvalRuns
     * const evalRuns = await prisma.evalRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evalRunWithIdOnly = await prisma.evalRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvalRunFindManyArgs>(args?: SelectSubset<T, EvalRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvalRun.
     * @param {EvalRunCreateArgs} args - Arguments to create a EvalRun.
     * @example
     * // Create one EvalRun
     * const EvalRun = await prisma.evalRun.create({
     *   data: {
     *     // ... data to create a EvalRun
     *   }
     * })
     * 
     */
    create<T extends EvalRunCreateArgs>(args: SelectSubset<T, EvalRunCreateArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvalRuns.
     * @param {EvalRunCreateManyArgs} args - Arguments to create many EvalRuns.
     * @example
     * // Create many EvalRuns
     * const evalRun = await prisma.evalRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvalRunCreateManyArgs>(args?: SelectSubset<T, EvalRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvalRuns and returns the data saved in the database.
     * @param {EvalRunCreateManyAndReturnArgs} args - Arguments to create many EvalRuns.
     * @example
     * // Create many EvalRuns
     * const evalRun = await prisma.evalRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvalRuns and only return the `id`
     * const evalRunWithIdOnly = await prisma.evalRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvalRunCreateManyAndReturnArgs>(args?: SelectSubset<T, EvalRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvalRun.
     * @param {EvalRunDeleteArgs} args - Arguments to delete one EvalRun.
     * @example
     * // Delete one EvalRun
     * const EvalRun = await prisma.evalRun.delete({
     *   where: {
     *     // ... filter to delete one EvalRun
     *   }
     * })
     * 
     */
    delete<T extends EvalRunDeleteArgs>(args: SelectSubset<T, EvalRunDeleteArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvalRun.
     * @param {EvalRunUpdateArgs} args - Arguments to update one EvalRun.
     * @example
     * // Update one EvalRun
     * const evalRun = await prisma.evalRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvalRunUpdateArgs>(args: SelectSubset<T, EvalRunUpdateArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvalRuns.
     * @param {EvalRunDeleteManyArgs} args - Arguments to filter EvalRuns to delete.
     * @example
     * // Delete a few EvalRuns
     * const { count } = await prisma.evalRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvalRunDeleteManyArgs>(args?: SelectSubset<T, EvalRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvalRuns
     * const evalRun = await prisma.evalRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvalRunUpdateManyArgs>(args: SelectSubset<T, EvalRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalRuns and returns the data updated in the database.
     * @param {EvalRunUpdateManyAndReturnArgs} args - Arguments to update many EvalRuns.
     * @example
     * // Update many EvalRuns
     * const evalRun = await prisma.evalRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvalRuns and only return the `id`
     * const evalRunWithIdOnly = await prisma.evalRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvalRunUpdateManyAndReturnArgs>(args: SelectSubset<T, EvalRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvalRun.
     * @param {EvalRunUpsertArgs} args - Arguments to update or create a EvalRun.
     * @example
     * // Update or create a EvalRun
     * const evalRun = await prisma.evalRun.upsert({
     *   create: {
     *     // ... data to create a EvalRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvalRun we want to update
     *   }
     * })
     */
    upsert<T extends EvalRunUpsertArgs>(args: SelectSubset<T, EvalRunUpsertArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvalRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRunCountArgs} args - Arguments to filter EvalRuns to count.
     * @example
     * // Count the number of EvalRuns
     * const count = await prisma.evalRun.count({
     *   where: {
     *     // ... the filter for the EvalRuns we want to count
     *   }
     * })
    **/
    count<T extends EvalRunCountArgs>(
      args?: Subset<T, EvalRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvalRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvalRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvalRunAggregateArgs>(args: Subset<T, EvalRunAggregateArgs>): Prisma.PrismaPromise<GetEvalRunAggregateType<T>>

    /**
     * Group by EvalRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvalRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvalRunGroupByArgs['orderBy'] }
        : { orderBy?: EvalRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvalRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvalRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvalRun model
   */
  readonly fields: EvalRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvalRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvalRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prompt<T extends PromptTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptTemplateDefaultArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modelConfig<T extends ModelConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelConfigDefaultArgs<ExtArgs>>): Prisma__ModelConfigClient<$Result.GetResult<Prisma.$ModelConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    results<T extends EvalRun$resultsArgs<ExtArgs> = {}>(args?: Subset<T, EvalRun$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvalRun model
   */
  interface EvalRunFieldRefs {
    readonly id: FieldRef<"EvalRun", 'String'>
    readonly datasetId: FieldRef<"EvalRun", 'String'>
    readonly promptId: FieldRef<"EvalRun", 'String'>
    readonly modelConfigId: FieldRef<"EvalRun", 'String'>
    readonly status: FieldRef<"EvalRun", 'String'>
    readonly startedAt: FieldRef<"EvalRun", 'DateTime'>
    readonly completedAt: FieldRef<"EvalRun", 'DateTime'>
    readonly aggregateScore: FieldRef<"EvalRun", 'Json'>
    readonly createdAt: FieldRef<"EvalRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EvalRun findUnique
   */
  export type EvalRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * Filter, which EvalRun to fetch.
     */
    where: EvalRunWhereUniqueInput
  }

  /**
   * EvalRun findUniqueOrThrow
   */
  export type EvalRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * Filter, which EvalRun to fetch.
     */
    where: EvalRunWhereUniqueInput
  }

  /**
   * EvalRun findFirst
   */
  export type EvalRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * Filter, which EvalRun to fetch.
     */
    where?: EvalRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRuns to fetch.
     */
    orderBy?: EvalRunOrderByWithRelationInput | EvalRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalRuns.
     */
    cursor?: EvalRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalRuns.
     */
    distinct?: EvalRunScalarFieldEnum | EvalRunScalarFieldEnum[]
  }

  /**
   * EvalRun findFirstOrThrow
   */
  export type EvalRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * Filter, which EvalRun to fetch.
     */
    where?: EvalRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRuns to fetch.
     */
    orderBy?: EvalRunOrderByWithRelationInput | EvalRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalRuns.
     */
    cursor?: EvalRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalRuns.
     */
    distinct?: EvalRunScalarFieldEnum | EvalRunScalarFieldEnum[]
  }

  /**
   * EvalRun findMany
   */
  export type EvalRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * Filter, which EvalRuns to fetch.
     */
    where?: EvalRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalRuns to fetch.
     */
    orderBy?: EvalRunOrderByWithRelationInput | EvalRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvalRuns.
     */
    cursor?: EvalRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalRuns.
     */
    skip?: number
    distinct?: EvalRunScalarFieldEnum | EvalRunScalarFieldEnum[]
  }

  /**
   * EvalRun create
   */
  export type EvalRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * The data needed to create a EvalRun.
     */
    data: XOR<EvalRunCreateInput, EvalRunUncheckedCreateInput>
  }

  /**
   * EvalRun createMany
   */
  export type EvalRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvalRuns.
     */
    data: EvalRunCreateManyInput | EvalRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvalRun createManyAndReturn
   */
  export type EvalRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * The data used to create many EvalRuns.
     */
    data: EvalRunCreateManyInput | EvalRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvalRun update
   */
  export type EvalRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * The data needed to update a EvalRun.
     */
    data: XOR<EvalRunUpdateInput, EvalRunUncheckedUpdateInput>
    /**
     * Choose, which EvalRun to update.
     */
    where: EvalRunWhereUniqueInput
  }

  /**
   * EvalRun updateMany
   */
  export type EvalRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvalRuns.
     */
    data: XOR<EvalRunUpdateManyMutationInput, EvalRunUncheckedUpdateManyInput>
    /**
     * Filter which EvalRuns to update
     */
    where?: EvalRunWhereInput
    /**
     * Limit how many EvalRuns to update.
     */
    limit?: number
  }

  /**
   * EvalRun updateManyAndReturn
   */
  export type EvalRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * The data used to update EvalRuns.
     */
    data: XOR<EvalRunUpdateManyMutationInput, EvalRunUncheckedUpdateManyInput>
    /**
     * Filter which EvalRuns to update
     */
    where?: EvalRunWhereInput
    /**
     * Limit how many EvalRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvalRun upsert
   */
  export type EvalRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * The filter to search for the EvalRun to update in case it exists.
     */
    where: EvalRunWhereUniqueInput
    /**
     * In case the EvalRun found by the `where` argument doesn't exist, create a new EvalRun with this data.
     */
    create: XOR<EvalRunCreateInput, EvalRunUncheckedCreateInput>
    /**
     * In case the EvalRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvalRunUpdateInput, EvalRunUncheckedUpdateInput>
  }

  /**
   * EvalRun delete
   */
  export type EvalRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
    /**
     * Filter which EvalRun to delete.
     */
    where: EvalRunWhereUniqueInput
  }

  /**
   * EvalRun deleteMany
   */
  export type EvalRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalRuns to delete
     */
    where?: EvalRunWhereInput
    /**
     * Limit how many EvalRuns to delete.
     */
    limit?: number
  }

  /**
   * EvalRun.results
   */
  export type EvalRun$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    where?: EvalResultWhereInput
    orderBy?: EvalResultOrderByWithRelationInput | EvalResultOrderByWithRelationInput[]
    cursor?: EvalResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvalResultScalarFieldEnum | EvalResultScalarFieldEnum[]
  }

  /**
   * EvalRun without action
   */
  export type EvalRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalRun
     */
    select?: EvalRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalRun
     */
    omit?: EvalRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalRunInclude<ExtArgs> | null
  }


  /**
   * Model EvalResult
   */

  export type AggregateEvalResult = {
    _count: EvalResultCountAggregateOutputType | null
    _avg: EvalResultAvgAggregateOutputType | null
    _sum: EvalResultSumAggregateOutputType | null
    _min: EvalResultMinAggregateOutputType | null
    _max: EvalResultMaxAggregateOutputType | null
  }

  export type EvalResultAvgAggregateOutputType = {
    latencyMs: number | null
  }

  export type EvalResultSumAggregateOutputType = {
    latencyMs: number | null
  }

  export type EvalResultMinAggregateOutputType = {
    id: string | null
    evalRunId: string | null
    documentId: string | null
    rawOutput: string | null
    latencyMs: number | null
  }

  export type EvalResultMaxAggregateOutputType = {
    id: string | null
    evalRunId: string | null
    documentId: string | null
    rawOutput: string | null
    latencyMs: number | null
  }

  export type EvalResultCountAggregateOutputType = {
    id: number
    evalRunId: number
    documentId: number
    rawOutput: number
    parsedOutput: number
    latencyMs: number
    tokenUsage: number
    autoScore: number
    _all: number
  }


  export type EvalResultAvgAggregateInputType = {
    latencyMs?: true
  }

  export type EvalResultSumAggregateInputType = {
    latencyMs?: true
  }

  export type EvalResultMinAggregateInputType = {
    id?: true
    evalRunId?: true
    documentId?: true
    rawOutput?: true
    latencyMs?: true
  }

  export type EvalResultMaxAggregateInputType = {
    id?: true
    evalRunId?: true
    documentId?: true
    rawOutput?: true
    latencyMs?: true
  }

  export type EvalResultCountAggregateInputType = {
    id?: true
    evalRunId?: true
    documentId?: true
    rawOutput?: true
    parsedOutput?: true
    latencyMs?: true
    tokenUsage?: true
    autoScore?: true
    _all?: true
  }

  export type EvalResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalResult to aggregate.
     */
    where?: EvalResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalResults to fetch.
     */
    orderBy?: EvalResultOrderByWithRelationInput | EvalResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvalResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvalResults
    **/
    _count?: true | EvalResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvalResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvalResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvalResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvalResultMaxAggregateInputType
  }

  export type GetEvalResultAggregateType<T extends EvalResultAggregateArgs> = {
        [P in keyof T & keyof AggregateEvalResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvalResult[P]>
      : GetScalarType<T[P], AggregateEvalResult[P]>
  }




  export type EvalResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvalResultWhereInput
    orderBy?: EvalResultOrderByWithAggregationInput | EvalResultOrderByWithAggregationInput[]
    by: EvalResultScalarFieldEnum[] | EvalResultScalarFieldEnum
    having?: EvalResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvalResultCountAggregateInputType | true
    _avg?: EvalResultAvgAggregateInputType
    _sum?: EvalResultSumAggregateInputType
    _min?: EvalResultMinAggregateInputType
    _max?: EvalResultMaxAggregateInputType
  }

  export type EvalResultGroupByOutputType = {
    id: string
    evalRunId: string
    documentId: string
    rawOutput: string
    parsedOutput: JsonValue | null
    latencyMs: number
    tokenUsage: JsonValue | null
    autoScore: JsonValue | null
    _count: EvalResultCountAggregateOutputType | null
    _avg: EvalResultAvgAggregateOutputType | null
    _sum: EvalResultSumAggregateOutputType | null
    _min: EvalResultMinAggregateOutputType | null
    _max: EvalResultMaxAggregateOutputType | null
  }

  type GetEvalResultGroupByPayload<T extends EvalResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvalResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvalResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvalResultGroupByOutputType[P]>
            : GetScalarType<T[P], EvalResultGroupByOutputType[P]>
        }
      >
    >


  export type EvalResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalRunId?: boolean
    documentId?: boolean
    rawOutput?: boolean
    parsedOutput?: boolean
    latencyMs?: boolean
    tokenUsage?: boolean
    autoScore?: boolean
    evalRun?: boolean | EvalRunDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    humanReview?: boolean | EvalResult$humanReviewArgs<ExtArgs>
  }, ExtArgs["result"]["evalResult"]>

  export type EvalResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalRunId?: boolean
    documentId?: boolean
    rawOutput?: boolean
    parsedOutput?: boolean
    latencyMs?: boolean
    tokenUsage?: boolean
    autoScore?: boolean
    evalRun?: boolean | EvalRunDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalResult"]>

  export type EvalResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalRunId?: boolean
    documentId?: boolean
    rawOutput?: boolean
    parsedOutput?: boolean
    latencyMs?: boolean
    tokenUsage?: boolean
    autoScore?: boolean
    evalRun?: boolean | EvalRunDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evalResult"]>

  export type EvalResultSelectScalar = {
    id?: boolean
    evalRunId?: boolean
    documentId?: boolean
    rawOutput?: boolean
    parsedOutput?: boolean
    latencyMs?: boolean
    tokenUsage?: boolean
    autoScore?: boolean
  }

  export type EvalResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evalRunId" | "documentId" | "rawOutput" | "parsedOutput" | "latencyMs" | "tokenUsage" | "autoScore", ExtArgs["result"]["evalResult"]>
  export type EvalResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRun?: boolean | EvalRunDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
    humanReview?: boolean | EvalResult$humanReviewArgs<ExtArgs>
  }
  export type EvalResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRun?: boolean | EvalRunDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type EvalResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalRun?: boolean | EvalRunDefaultArgs<ExtArgs>
    document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $EvalResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EvalResult"
    objects: {
      evalRun: Prisma.$EvalRunPayload<ExtArgs>
      document: Prisma.$DocumentPayload<ExtArgs>
      humanReview: Prisma.$HumanReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      evalRunId: string
      documentId: string
      rawOutput: string
      parsedOutput: Prisma.JsonValue | null
      latencyMs: number
      tokenUsage: Prisma.JsonValue | null
      autoScore: Prisma.JsonValue | null
    }, ExtArgs["result"]["evalResult"]>
    composites: {}
  }

  type EvalResultGetPayload<S extends boolean | null | undefined | EvalResultDefaultArgs> = $Result.GetResult<Prisma.$EvalResultPayload, S>

  type EvalResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvalResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvalResultCountAggregateInputType | true
    }

  export interface EvalResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvalResult'], meta: { name: 'EvalResult' } }
    /**
     * Find zero or one EvalResult that matches the filter.
     * @param {EvalResultFindUniqueArgs} args - Arguments to find a EvalResult
     * @example
     * // Get one EvalResult
     * const evalResult = await prisma.evalResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvalResultFindUniqueArgs>(args: SelectSubset<T, EvalResultFindUniqueArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EvalResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvalResultFindUniqueOrThrowArgs} args - Arguments to find a EvalResult
     * @example
     * // Get one EvalResult
     * const evalResult = await prisma.evalResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvalResultFindUniqueOrThrowArgs>(args: SelectSubset<T, EvalResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalResultFindFirstArgs} args - Arguments to find a EvalResult
     * @example
     * // Get one EvalResult
     * const evalResult = await prisma.evalResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvalResultFindFirstArgs>(args?: SelectSubset<T, EvalResultFindFirstArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EvalResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalResultFindFirstOrThrowArgs} args - Arguments to find a EvalResult
     * @example
     * // Get one EvalResult
     * const evalResult = await prisma.evalResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvalResultFindFirstOrThrowArgs>(args?: SelectSubset<T, EvalResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EvalResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvalResults
     * const evalResults = await prisma.evalResult.findMany()
     * 
     * // Get first 10 EvalResults
     * const evalResults = await prisma.evalResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evalResultWithIdOnly = await prisma.evalResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvalResultFindManyArgs>(args?: SelectSubset<T, EvalResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EvalResult.
     * @param {EvalResultCreateArgs} args - Arguments to create a EvalResult.
     * @example
     * // Create one EvalResult
     * const EvalResult = await prisma.evalResult.create({
     *   data: {
     *     // ... data to create a EvalResult
     *   }
     * })
     * 
     */
    create<T extends EvalResultCreateArgs>(args: SelectSubset<T, EvalResultCreateArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EvalResults.
     * @param {EvalResultCreateManyArgs} args - Arguments to create many EvalResults.
     * @example
     * // Create many EvalResults
     * const evalResult = await prisma.evalResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvalResultCreateManyArgs>(args?: SelectSubset<T, EvalResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EvalResults and returns the data saved in the database.
     * @param {EvalResultCreateManyAndReturnArgs} args - Arguments to create many EvalResults.
     * @example
     * // Create many EvalResults
     * const evalResult = await prisma.evalResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EvalResults and only return the `id`
     * const evalResultWithIdOnly = await prisma.evalResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvalResultCreateManyAndReturnArgs>(args?: SelectSubset<T, EvalResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EvalResult.
     * @param {EvalResultDeleteArgs} args - Arguments to delete one EvalResult.
     * @example
     * // Delete one EvalResult
     * const EvalResult = await prisma.evalResult.delete({
     *   where: {
     *     // ... filter to delete one EvalResult
     *   }
     * })
     * 
     */
    delete<T extends EvalResultDeleteArgs>(args: SelectSubset<T, EvalResultDeleteArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EvalResult.
     * @param {EvalResultUpdateArgs} args - Arguments to update one EvalResult.
     * @example
     * // Update one EvalResult
     * const evalResult = await prisma.evalResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvalResultUpdateArgs>(args: SelectSubset<T, EvalResultUpdateArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EvalResults.
     * @param {EvalResultDeleteManyArgs} args - Arguments to filter EvalResults to delete.
     * @example
     * // Delete a few EvalResults
     * const { count } = await prisma.evalResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvalResultDeleteManyArgs>(args?: SelectSubset<T, EvalResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvalResults
     * const evalResult = await prisma.evalResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvalResultUpdateManyArgs>(args: SelectSubset<T, EvalResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvalResults and returns the data updated in the database.
     * @param {EvalResultUpdateManyAndReturnArgs} args - Arguments to update many EvalResults.
     * @example
     * // Update many EvalResults
     * const evalResult = await prisma.evalResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EvalResults and only return the `id`
     * const evalResultWithIdOnly = await prisma.evalResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvalResultUpdateManyAndReturnArgs>(args: SelectSubset<T, EvalResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EvalResult.
     * @param {EvalResultUpsertArgs} args - Arguments to update or create a EvalResult.
     * @example
     * // Update or create a EvalResult
     * const evalResult = await prisma.evalResult.upsert({
     *   create: {
     *     // ... data to create a EvalResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvalResult we want to update
     *   }
     * })
     */
    upsert<T extends EvalResultUpsertArgs>(args: SelectSubset<T, EvalResultUpsertArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EvalResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalResultCountArgs} args - Arguments to filter EvalResults to count.
     * @example
     * // Count the number of EvalResults
     * const count = await prisma.evalResult.count({
     *   where: {
     *     // ... the filter for the EvalResults we want to count
     *   }
     * })
    **/
    count<T extends EvalResultCountArgs>(
      args?: Subset<T, EvalResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvalResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvalResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvalResultAggregateArgs>(args: Subset<T, EvalResultAggregateArgs>): Prisma.PrismaPromise<GetEvalResultAggregateType<T>>

    /**
     * Group by EvalResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvalResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvalResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvalResultGroupByArgs['orderBy'] }
        : { orderBy?: EvalResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvalResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvalResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EvalResult model
   */
  readonly fields: EvalResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EvalResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvalResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evalRun<T extends EvalRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvalRunDefaultArgs<ExtArgs>>): Prisma__EvalRunClient<$Result.GetResult<Prisma.$EvalRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    humanReview<T extends EvalResult$humanReviewArgs<ExtArgs> = {}>(args?: Subset<T, EvalResult$humanReviewArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EvalResult model
   */
  interface EvalResultFieldRefs {
    readonly id: FieldRef<"EvalResult", 'String'>
    readonly evalRunId: FieldRef<"EvalResult", 'String'>
    readonly documentId: FieldRef<"EvalResult", 'String'>
    readonly rawOutput: FieldRef<"EvalResult", 'String'>
    readonly parsedOutput: FieldRef<"EvalResult", 'Json'>
    readonly latencyMs: FieldRef<"EvalResult", 'Int'>
    readonly tokenUsage: FieldRef<"EvalResult", 'Json'>
    readonly autoScore: FieldRef<"EvalResult", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * EvalResult findUnique
   */
  export type EvalResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * Filter, which EvalResult to fetch.
     */
    where: EvalResultWhereUniqueInput
  }

  /**
   * EvalResult findUniqueOrThrow
   */
  export type EvalResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * Filter, which EvalResult to fetch.
     */
    where: EvalResultWhereUniqueInput
  }

  /**
   * EvalResult findFirst
   */
  export type EvalResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * Filter, which EvalResult to fetch.
     */
    where?: EvalResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalResults to fetch.
     */
    orderBy?: EvalResultOrderByWithRelationInput | EvalResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalResults.
     */
    cursor?: EvalResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalResults.
     */
    distinct?: EvalResultScalarFieldEnum | EvalResultScalarFieldEnum[]
  }

  /**
   * EvalResult findFirstOrThrow
   */
  export type EvalResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * Filter, which EvalResult to fetch.
     */
    where?: EvalResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalResults to fetch.
     */
    orderBy?: EvalResultOrderByWithRelationInput | EvalResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvalResults.
     */
    cursor?: EvalResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvalResults.
     */
    distinct?: EvalResultScalarFieldEnum | EvalResultScalarFieldEnum[]
  }

  /**
   * EvalResult findMany
   */
  export type EvalResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * Filter, which EvalResults to fetch.
     */
    where?: EvalResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvalResults to fetch.
     */
    orderBy?: EvalResultOrderByWithRelationInput | EvalResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvalResults.
     */
    cursor?: EvalResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvalResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvalResults.
     */
    skip?: number
    distinct?: EvalResultScalarFieldEnum | EvalResultScalarFieldEnum[]
  }

  /**
   * EvalResult create
   */
  export type EvalResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * The data needed to create a EvalResult.
     */
    data: XOR<EvalResultCreateInput, EvalResultUncheckedCreateInput>
  }

  /**
   * EvalResult createMany
   */
  export type EvalResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvalResults.
     */
    data: EvalResultCreateManyInput | EvalResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EvalResult createManyAndReturn
   */
  export type EvalResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * The data used to create many EvalResults.
     */
    data: EvalResultCreateManyInput | EvalResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvalResult update
   */
  export type EvalResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * The data needed to update a EvalResult.
     */
    data: XOR<EvalResultUpdateInput, EvalResultUncheckedUpdateInput>
    /**
     * Choose, which EvalResult to update.
     */
    where: EvalResultWhereUniqueInput
  }

  /**
   * EvalResult updateMany
   */
  export type EvalResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvalResults.
     */
    data: XOR<EvalResultUpdateManyMutationInput, EvalResultUncheckedUpdateManyInput>
    /**
     * Filter which EvalResults to update
     */
    where?: EvalResultWhereInput
    /**
     * Limit how many EvalResults to update.
     */
    limit?: number
  }

  /**
   * EvalResult updateManyAndReturn
   */
  export type EvalResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * The data used to update EvalResults.
     */
    data: XOR<EvalResultUpdateManyMutationInput, EvalResultUncheckedUpdateManyInput>
    /**
     * Filter which EvalResults to update
     */
    where?: EvalResultWhereInput
    /**
     * Limit how many EvalResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EvalResult upsert
   */
  export type EvalResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * The filter to search for the EvalResult to update in case it exists.
     */
    where: EvalResultWhereUniqueInput
    /**
     * In case the EvalResult found by the `where` argument doesn't exist, create a new EvalResult with this data.
     */
    create: XOR<EvalResultCreateInput, EvalResultUncheckedCreateInput>
    /**
     * In case the EvalResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvalResultUpdateInput, EvalResultUncheckedUpdateInput>
  }

  /**
   * EvalResult delete
   */
  export type EvalResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
    /**
     * Filter which EvalResult to delete.
     */
    where: EvalResultWhereUniqueInput
  }

  /**
   * EvalResult deleteMany
   */
  export type EvalResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvalResults to delete
     */
    where?: EvalResultWhereInput
    /**
     * Limit how many EvalResults to delete.
     */
    limit?: number
  }

  /**
   * EvalResult.humanReview
   */
  export type EvalResult$humanReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    where?: HumanReviewWhereInput
  }

  /**
   * EvalResult without action
   */
  export type EvalResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvalResult
     */
    select?: EvalResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EvalResult
     */
    omit?: EvalResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvalResultInclude<ExtArgs> | null
  }


  /**
   * Model HumanReview
   */

  export type AggregateHumanReview = {
    _count: HumanReviewCountAggregateOutputType | null
    _avg: HumanReviewAvgAggregateOutputType | null
    _sum: HumanReviewSumAggregateOutputType | null
    _min: HumanReviewMinAggregateOutputType | null
    _max: HumanReviewMaxAggregateOutputType | null
  }

  export type HumanReviewAvgAggregateOutputType = {
    score: number | null
  }

  export type HumanReviewSumAggregateOutputType = {
    score: number | null
  }

  export type HumanReviewMinAggregateOutputType = {
    id: string | null
    evalResultId: string | null
    reviewerId: string | null
    score: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type HumanReviewMaxAggregateOutputType = {
    id: string | null
    evalResultId: string | null
    reviewerId: string | null
    score: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type HumanReviewCountAggregateOutputType = {
    id: number
    evalResultId: number
    reviewerId: number
    score: number
    entityScores: number
    notes: number
    createdAt: number
    _all: number
  }


  export type HumanReviewAvgAggregateInputType = {
    score?: true
  }

  export type HumanReviewSumAggregateInputType = {
    score?: true
  }

  export type HumanReviewMinAggregateInputType = {
    id?: true
    evalResultId?: true
    reviewerId?: true
    score?: true
    notes?: true
    createdAt?: true
  }

  export type HumanReviewMaxAggregateInputType = {
    id?: true
    evalResultId?: true
    reviewerId?: true
    score?: true
    notes?: true
    createdAt?: true
  }

  export type HumanReviewCountAggregateInputType = {
    id?: true
    evalResultId?: true
    reviewerId?: true
    score?: true
    entityScores?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type HumanReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumanReview to aggregate.
     */
    where?: HumanReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanReviews to fetch.
     */
    orderBy?: HumanReviewOrderByWithRelationInput | HumanReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HumanReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HumanReviews
    **/
    _count?: true | HumanReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HumanReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HumanReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HumanReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HumanReviewMaxAggregateInputType
  }

  export type GetHumanReviewAggregateType<T extends HumanReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateHumanReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHumanReview[P]>
      : GetScalarType<T[P], AggregateHumanReview[P]>
  }




  export type HumanReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumanReviewWhereInput
    orderBy?: HumanReviewOrderByWithAggregationInput | HumanReviewOrderByWithAggregationInput[]
    by: HumanReviewScalarFieldEnum[] | HumanReviewScalarFieldEnum
    having?: HumanReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HumanReviewCountAggregateInputType | true
    _avg?: HumanReviewAvgAggregateInputType
    _sum?: HumanReviewSumAggregateInputType
    _min?: HumanReviewMinAggregateInputType
    _max?: HumanReviewMaxAggregateInputType
  }

  export type HumanReviewGroupByOutputType = {
    id: string
    evalResultId: string
    reviewerId: string | null
    score: number
    entityScores: JsonValue | null
    notes: string | null
    createdAt: Date
    _count: HumanReviewCountAggregateOutputType | null
    _avg: HumanReviewAvgAggregateOutputType | null
    _sum: HumanReviewSumAggregateOutputType | null
    _min: HumanReviewMinAggregateOutputType | null
    _max: HumanReviewMaxAggregateOutputType | null
  }

  type GetHumanReviewGroupByPayload<T extends HumanReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HumanReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HumanReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HumanReviewGroupByOutputType[P]>
            : GetScalarType<T[P], HumanReviewGroupByOutputType[P]>
        }
      >
    >


  export type HumanReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalResultId?: boolean
    reviewerId?: boolean
    score?: boolean
    entityScores?: boolean
    notes?: boolean
    createdAt?: boolean
    evalResult?: boolean | EvalResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["humanReview"]>

  export type HumanReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalResultId?: boolean
    reviewerId?: boolean
    score?: boolean
    entityScores?: boolean
    notes?: boolean
    createdAt?: boolean
    evalResult?: boolean | EvalResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["humanReview"]>

  export type HumanReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evalResultId?: boolean
    reviewerId?: boolean
    score?: boolean
    entityScores?: boolean
    notes?: boolean
    createdAt?: boolean
    evalResult?: boolean | EvalResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["humanReview"]>

  export type HumanReviewSelectScalar = {
    id?: boolean
    evalResultId?: boolean
    reviewerId?: boolean
    score?: boolean
    entityScores?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type HumanReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "evalResultId" | "reviewerId" | "score" | "entityScores" | "notes" | "createdAt", ExtArgs["result"]["humanReview"]>
  export type HumanReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalResult?: boolean | EvalResultDefaultArgs<ExtArgs>
  }
  export type HumanReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalResult?: boolean | EvalResultDefaultArgs<ExtArgs>
  }
  export type HumanReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evalResult?: boolean | EvalResultDefaultArgs<ExtArgs>
  }

  export type $HumanReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HumanReview"
    objects: {
      evalResult: Prisma.$EvalResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      evalResultId: string
      reviewerId: string | null
      score: number
      entityScores: Prisma.JsonValue | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["humanReview"]>
    composites: {}
  }

  type HumanReviewGetPayload<S extends boolean | null | undefined | HumanReviewDefaultArgs> = $Result.GetResult<Prisma.$HumanReviewPayload, S>

  type HumanReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HumanReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HumanReviewCountAggregateInputType | true
    }

  export interface HumanReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HumanReview'], meta: { name: 'HumanReview' } }
    /**
     * Find zero or one HumanReview that matches the filter.
     * @param {HumanReviewFindUniqueArgs} args - Arguments to find a HumanReview
     * @example
     * // Get one HumanReview
     * const humanReview = await prisma.humanReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HumanReviewFindUniqueArgs>(args: SelectSubset<T, HumanReviewFindUniqueArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HumanReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HumanReviewFindUniqueOrThrowArgs} args - Arguments to find a HumanReview
     * @example
     * // Get one HumanReview
     * const humanReview = await prisma.humanReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HumanReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, HumanReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HumanReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanReviewFindFirstArgs} args - Arguments to find a HumanReview
     * @example
     * // Get one HumanReview
     * const humanReview = await prisma.humanReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HumanReviewFindFirstArgs>(args?: SelectSubset<T, HumanReviewFindFirstArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HumanReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanReviewFindFirstOrThrowArgs} args - Arguments to find a HumanReview
     * @example
     * // Get one HumanReview
     * const humanReview = await prisma.humanReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HumanReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, HumanReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HumanReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HumanReviews
     * const humanReviews = await prisma.humanReview.findMany()
     * 
     * // Get first 10 HumanReviews
     * const humanReviews = await prisma.humanReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const humanReviewWithIdOnly = await prisma.humanReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HumanReviewFindManyArgs>(args?: SelectSubset<T, HumanReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HumanReview.
     * @param {HumanReviewCreateArgs} args - Arguments to create a HumanReview.
     * @example
     * // Create one HumanReview
     * const HumanReview = await prisma.humanReview.create({
     *   data: {
     *     // ... data to create a HumanReview
     *   }
     * })
     * 
     */
    create<T extends HumanReviewCreateArgs>(args: SelectSubset<T, HumanReviewCreateArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HumanReviews.
     * @param {HumanReviewCreateManyArgs} args - Arguments to create many HumanReviews.
     * @example
     * // Create many HumanReviews
     * const humanReview = await prisma.humanReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HumanReviewCreateManyArgs>(args?: SelectSubset<T, HumanReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HumanReviews and returns the data saved in the database.
     * @param {HumanReviewCreateManyAndReturnArgs} args - Arguments to create many HumanReviews.
     * @example
     * // Create many HumanReviews
     * const humanReview = await prisma.humanReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HumanReviews and only return the `id`
     * const humanReviewWithIdOnly = await prisma.humanReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HumanReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, HumanReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HumanReview.
     * @param {HumanReviewDeleteArgs} args - Arguments to delete one HumanReview.
     * @example
     * // Delete one HumanReview
     * const HumanReview = await prisma.humanReview.delete({
     *   where: {
     *     // ... filter to delete one HumanReview
     *   }
     * })
     * 
     */
    delete<T extends HumanReviewDeleteArgs>(args: SelectSubset<T, HumanReviewDeleteArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HumanReview.
     * @param {HumanReviewUpdateArgs} args - Arguments to update one HumanReview.
     * @example
     * // Update one HumanReview
     * const humanReview = await prisma.humanReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HumanReviewUpdateArgs>(args: SelectSubset<T, HumanReviewUpdateArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HumanReviews.
     * @param {HumanReviewDeleteManyArgs} args - Arguments to filter HumanReviews to delete.
     * @example
     * // Delete a few HumanReviews
     * const { count } = await prisma.humanReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HumanReviewDeleteManyArgs>(args?: SelectSubset<T, HumanReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HumanReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HumanReviews
     * const humanReview = await prisma.humanReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HumanReviewUpdateManyArgs>(args: SelectSubset<T, HumanReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HumanReviews and returns the data updated in the database.
     * @param {HumanReviewUpdateManyAndReturnArgs} args - Arguments to update many HumanReviews.
     * @example
     * // Update many HumanReviews
     * const humanReview = await prisma.humanReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HumanReviews and only return the `id`
     * const humanReviewWithIdOnly = await prisma.humanReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HumanReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, HumanReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HumanReview.
     * @param {HumanReviewUpsertArgs} args - Arguments to update or create a HumanReview.
     * @example
     * // Update or create a HumanReview
     * const humanReview = await prisma.humanReview.upsert({
     *   create: {
     *     // ... data to create a HumanReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HumanReview we want to update
     *   }
     * })
     */
    upsert<T extends HumanReviewUpsertArgs>(args: SelectSubset<T, HumanReviewUpsertArgs<ExtArgs>>): Prisma__HumanReviewClient<$Result.GetResult<Prisma.$HumanReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HumanReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanReviewCountArgs} args - Arguments to filter HumanReviews to count.
     * @example
     * // Count the number of HumanReviews
     * const count = await prisma.humanReview.count({
     *   where: {
     *     // ... the filter for the HumanReviews we want to count
     *   }
     * })
    **/
    count<T extends HumanReviewCountArgs>(
      args?: Subset<T, HumanReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HumanReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HumanReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HumanReviewAggregateArgs>(args: Subset<T, HumanReviewAggregateArgs>): Prisma.PrismaPromise<GetHumanReviewAggregateType<T>>

    /**
     * Group by HumanReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumanReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HumanReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HumanReviewGroupByArgs['orderBy'] }
        : { orderBy?: HumanReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HumanReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHumanReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HumanReview model
   */
  readonly fields: HumanReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HumanReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HumanReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evalResult<T extends EvalResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EvalResultDefaultArgs<ExtArgs>>): Prisma__EvalResultClient<$Result.GetResult<Prisma.$EvalResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HumanReview model
   */
  interface HumanReviewFieldRefs {
    readonly id: FieldRef<"HumanReview", 'String'>
    readonly evalResultId: FieldRef<"HumanReview", 'String'>
    readonly reviewerId: FieldRef<"HumanReview", 'String'>
    readonly score: FieldRef<"HumanReview", 'Float'>
    readonly entityScores: FieldRef<"HumanReview", 'Json'>
    readonly notes: FieldRef<"HumanReview", 'String'>
    readonly createdAt: FieldRef<"HumanReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HumanReview findUnique
   */
  export type HumanReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * Filter, which HumanReview to fetch.
     */
    where: HumanReviewWhereUniqueInput
  }

  /**
   * HumanReview findUniqueOrThrow
   */
  export type HumanReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * Filter, which HumanReview to fetch.
     */
    where: HumanReviewWhereUniqueInput
  }

  /**
   * HumanReview findFirst
   */
  export type HumanReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * Filter, which HumanReview to fetch.
     */
    where?: HumanReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanReviews to fetch.
     */
    orderBy?: HumanReviewOrderByWithRelationInput | HumanReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumanReviews.
     */
    cursor?: HumanReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumanReviews.
     */
    distinct?: HumanReviewScalarFieldEnum | HumanReviewScalarFieldEnum[]
  }

  /**
   * HumanReview findFirstOrThrow
   */
  export type HumanReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * Filter, which HumanReview to fetch.
     */
    where?: HumanReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanReviews to fetch.
     */
    orderBy?: HumanReviewOrderByWithRelationInput | HumanReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumanReviews.
     */
    cursor?: HumanReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumanReviews.
     */
    distinct?: HumanReviewScalarFieldEnum | HumanReviewScalarFieldEnum[]
  }

  /**
   * HumanReview findMany
   */
  export type HumanReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * Filter, which HumanReviews to fetch.
     */
    where?: HumanReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumanReviews to fetch.
     */
    orderBy?: HumanReviewOrderByWithRelationInput | HumanReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HumanReviews.
     */
    cursor?: HumanReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumanReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumanReviews.
     */
    skip?: number
    distinct?: HumanReviewScalarFieldEnum | HumanReviewScalarFieldEnum[]
  }

  /**
   * HumanReview create
   */
  export type HumanReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a HumanReview.
     */
    data: XOR<HumanReviewCreateInput, HumanReviewUncheckedCreateInput>
  }

  /**
   * HumanReview createMany
   */
  export type HumanReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HumanReviews.
     */
    data: HumanReviewCreateManyInput | HumanReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HumanReview createManyAndReturn
   */
  export type HumanReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * The data used to create many HumanReviews.
     */
    data: HumanReviewCreateManyInput | HumanReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HumanReview update
   */
  export type HumanReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a HumanReview.
     */
    data: XOR<HumanReviewUpdateInput, HumanReviewUncheckedUpdateInput>
    /**
     * Choose, which HumanReview to update.
     */
    where: HumanReviewWhereUniqueInput
  }

  /**
   * HumanReview updateMany
   */
  export type HumanReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HumanReviews.
     */
    data: XOR<HumanReviewUpdateManyMutationInput, HumanReviewUncheckedUpdateManyInput>
    /**
     * Filter which HumanReviews to update
     */
    where?: HumanReviewWhereInput
    /**
     * Limit how many HumanReviews to update.
     */
    limit?: number
  }

  /**
   * HumanReview updateManyAndReturn
   */
  export type HumanReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * The data used to update HumanReviews.
     */
    data: XOR<HumanReviewUpdateManyMutationInput, HumanReviewUncheckedUpdateManyInput>
    /**
     * Filter which HumanReviews to update
     */
    where?: HumanReviewWhereInput
    /**
     * Limit how many HumanReviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HumanReview upsert
   */
  export type HumanReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the HumanReview to update in case it exists.
     */
    where: HumanReviewWhereUniqueInput
    /**
     * In case the HumanReview found by the `where` argument doesn't exist, create a new HumanReview with this data.
     */
    create: XOR<HumanReviewCreateInput, HumanReviewUncheckedCreateInput>
    /**
     * In case the HumanReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HumanReviewUpdateInput, HumanReviewUncheckedUpdateInput>
  }

  /**
   * HumanReview delete
   */
  export type HumanReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
    /**
     * Filter which HumanReview to delete.
     */
    where: HumanReviewWhereUniqueInput
  }

  /**
   * HumanReview deleteMany
   */
  export type HumanReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumanReviews to delete
     */
    where?: HumanReviewWhereInput
    /**
     * Limit how many HumanReviews to delete.
     */
    limit?: number
  }

  /**
   * HumanReview without action
   */
  export type HumanReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumanReview
     */
    select?: HumanReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HumanReview
     */
    omit?: HumanReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HumanReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    originalName: 'originalName',
    storagePath: 'storagePath',
    extractedText: 'extractedText',
    pageCount: 'pageCount',
    createdAt: 'createdAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const DatasetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type DatasetScalarFieldEnum = (typeof DatasetScalarFieldEnum)[keyof typeof DatasetScalarFieldEnum]


  export const DatasetDocumentScalarFieldEnum: {
    id: 'id',
    datasetId: 'datasetId',
    documentId: 'documentId',
    groundTruth: 'groundTruth'
  };

  export type DatasetDocumentScalarFieldEnum = (typeof DatasetDocumentScalarFieldEnum)[keyof typeof DatasetDocumentScalarFieldEnum]


  export const PromptTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    systemPrompt: 'systemPrompt',
    userPrompt: 'userPrompt',
    outputSchema: 'outputSchema',
    node: 'node',
    createdAt: 'createdAt'
  };

  export type PromptTemplateScalarFieldEnum = (typeof PromptTemplateScalarFieldEnum)[keyof typeof PromptTemplateScalarFieldEnum]


  export const ModelConfigScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    modelId: 'modelId',
    displayName: 'displayName',
    isActive: 'isActive'
  };

  export type ModelConfigScalarFieldEnum = (typeof ModelConfigScalarFieldEnum)[keyof typeof ModelConfigScalarFieldEnum]


  export const EvalRunScalarFieldEnum: {
    id: 'id',
    datasetId: 'datasetId',
    promptId: 'promptId',
    modelConfigId: 'modelConfigId',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    aggregateScore: 'aggregateScore',
    createdAt: 'createdAt'
  };

  export type EvalRunScalarFieldEnum = (typeof EvalRunScalarFieldEnum)[keyof typeof EvalRunScalarFieldEnum]


  export const EvalResultScalarFieldEnum: {
    id: 'id',
    evalRunId: 'evalRunId',
    documentId: 'documentId',
    rawOutput: 'rawOutput',
    parsedOutput: 'parsedOutput',
    latencyMs: 'latencyMs',
    tokenUsage: 'tokenUsage',
    autoScore: 'autoScore'
  };

  export type EvalResultScalarFieldEnum = (typeof EvalResultScalarFieldEnum)[keyof typeof EvalResultScalarFieldEnum]


  export const HumanReviewScalarFieldEnum: {
    id: 'id',
    evalResultId: 'evalResultId',
    reviewerId: 'reviewerId',
    score: 'score',
    entityScores: 'entityScores',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type HumanReviewScalarFieldEnum = (typeof HumanReviewScalarFieldEnum)[keyof typeof HumanReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    storagePath?: StringFilter<"Document"> | string
    extractedText?: StringFilter<"Document"> | string
    pageCount?: IntFilter<"Document"> | number
    createdAt?: DateTimeFilter<"Document"> | Date | string
    datasetDocs?: DatasetDocumentListRelationFilter
    evalResults?: EvalResultListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    storagePath?: SortOrder
    extractedText?: SortOrder
    pageCount?: SortOrder
    createdAt?: SortOrder
    datasetDocs?: DatasetDocumentOrderByRelationAggregateInput
    evalResults?: EvalResultOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    name?: StringFilter<"Document"> | string
    originalName?: StringFilter<"Document"> | string
    storagePath?: StringFilter<"Document"> | string
    extractedText?: StringFilter<"Document"> | string
    pageCount?: IntFilter<"Document"> | number
    createdAt?: DateTimeFilter<"Document"> | Date | string
    datasetDocs?: DatasetDocumentListRelationFilter
    evalResults?: EvalResultListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    storagePath?: SortOrder
    extractedText?: SortOrder
    pageCount?: SortOrder
    createdAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    originalName?: StringWithAggregatesFilter<"Document"> | string
    storagePath?: StringWithAggregatesFilter<"Document"> | string
    extractedText?: StringWithAggregatesFilter<"Document"> | string
    pageCount?: IntWithAggregatesFilter<"Document"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type DatasetWhereInput = {
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    id?: StringFilter<"Dataset"> | string
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    documents?: DatasetDocumentListRelationFilter
    evalRuns?: EvalRunListRelationFilter
  }

  export type DatasetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    documents?: DatasetDocumentOrderByRelationAggregateInput
    evalRuns?: EvalRunOrderByRelationAggregateInput
  }

  export type DatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    documents?: DatasetDocumentListRelationFilter
    evalRuns?: EvalRunListRelationFilter
  }, "id">

  export type DatasetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DatasetCountOrderByAggregateInput
    _max?: DatasetMaxOrderByAggregateInput
    _min?: DatasetMinOrderByAggregateInput
  }

  export type DatasetScalarWhereWithAggregatesInput = {
    AND?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    OR?: DatasetScalarWhereWithAggregatesInput[]
    NOT?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dataset"> | string
    name?: StringWithAggregatesFilter<"Dataset"> | string
    description?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
  }

  export type DatasetDocumentWhereInput = {
    AND?: DatasetDocumentWhereInput | DatasetDocumentWhereInput[]
    OR?: DatasetDocumentWhereInput[]
    NOT?: DatasetDocumentWhereInput | DatasetDocumentWhereInput[]
    id?: StringFilter<"DatasetDocument"> | string
    datasetId?: StringFilter<"DatasetDocument"> | string
    documentId?: StringFilter<"DatasetDocument"> | string
    groundTruth?: JsonNullableFilter<"DatasetDocument">
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type DatasetDocumentOrderByWithRelationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    documentId?: SortOrder
    groundTruth?: SortOrderInput | SortOrder
    dataset?: DatasetOrderByWithRelationInput
    document?: DocumentOrderByWithRelationInput
  }

  export type DatasetDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    datasetId_documentId?: DatasetDocumentDatasetIdDocumentIdCompoundUniqueInput
    AND?: DatasetDocumentWhereInput | DatasetDocumentWhereInput[]
    OR?: DatasetDocumentWhereInput[]
    NOT?: DatasetDocumentWhereInput | DatasetDocumentWhereInput[]
    datasetId?: StringFilter<"DatasetDocument"> | string
    documentId?: StringFilter<"DatasetDocument"> | string
    groundTruth?: JsonNullableFilter<"DatasetDocument">
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "id" | "datasetId_documentId">

  export type DatasetDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    documentId?: SortOrder
    groundTruth?: SortOrderInput | SortOrder
    _count?: DatasetDocumentCountOrderByAggregateInput
    _max?: DatasetDocumentMaxOrderByAggregateInput
    _min?: DatasetDocumentMinOrderByAggregateInput
  }

  export type DatasetDocumentScalarWhereWithAggregatesInput = {
    AND?: DatasetDocumentScalarWhereWithAggregatesInput | DatasetDocumentScalarWhereWithAggregatesInput[]
    OR?: DatasetDocumentScalarWhereWithAggregatesInput[]
    NOT?: DatasetDocumentScalarWhereWithAggregatesInput | DatasetDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DatasetDocument"> | string
    datasetId?: StringWithAggregatesFilter<"DatasetDocument"> | string
    documentId?: StringWithAggregatesFilter<"DatasetDocument"> | string
    groundTruth?: JsonNullableWithAggregatesFilter<"DatasetDocument">
  }

  export type PromptTemplateWhereInput = {
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    id?: StringFilter<"PromptTemplate"> | string
    name?: StringFilter<"PromptTemplate"> | string
    version?: IntFilter<"PromptTemplate"> | number
    systemPrompt?: StringFilter<"PromptTemplate"> | string
    userPrompt?: StringFilter<"PromptTemplate"> | string
    outputSchema?: JsonNullableFilter<"PromptTemplate">
    node?: StringNullableFilter<"PromptTemplate"> | string | null
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    evalRuns?: EvalRunListRelationFilter
  }

  export type PromptTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    userPrompt?: SortOrder
    outputSchema?: SortOrderInput | SortOrder
    node?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    evalRuns?: EvalRunOrderByRelationAggregateInput
  }

  export type PromptTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    name?: StringFilter<"PromptTemplate"> | string
    version?: IntFilter<"PromptTemplate"> | number
    systemPrompt?: StringFilter<"PromptTemplate"> | string
    userPrompt?: StringFilter<"PromptTemplate"> | string
    outputSchema?: JsonNullableFilter<"PromptTemplate">
    node?: StringNullableFilter<"PromptTemplate"> | string | null
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    evalRuns?: EvalRunListRelationFilter
  }, "id">

  export type PromptTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    userPrompt?: SortOrder
    outputSchema?: SortOrderInput | SortOrder
    node?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PromptTemplateCountOrderByAggregateInput
    _avg?: PromptTemplateAvgOrderByAggregateInput
    _max?: PromptTemplateMaxOrderByAggregateInput
    _min?: PromptTemplateMinOrderByAggregateInput
    _sum?: PromptTemplateSumOrderByAggregateInput
  }

  export type PromptTemplateScalarWhereWithAggregatesInput = {
    AND?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    OR?: PromptTemplateScalarWhereWithAggregatesInput[]
    NOT?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptTemplate"> | string
    name?: StringWithAggregatesFilter<"PromptTemplate"> | string
    version?: IntWithAggregatesFilter<"PromptTemplate"> | number
    systemPrompt?: StringWithAggregatesFilter<"PromptTemplate"> | string
    userPrompt?: StringWithAggregatesFilter<"PromptTemplate"> | string
    outputSchema?: JsonNullableWithAggregatesFilter<"PromptTemplate">
    node?: StringNullableWithAggregatesFilter<"PromptTemplate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
  }

  export type ModelConfigWhereInput = {
    AND?: ModelConfigWhereInput | ModelConfigWhereInput[]
    OR?: ModelConfigWhereInput[]
    NOT?: ModelConfigWhereInput | ModelConfigWhereInput[]
    id?: StringFilter<"ModelConfig"> | string
    provider?: StringFilter<"ModelConfig"> | string
    modelId?: StringFilter<"ModelConfig"> | string
    displayName?: StringFilter<"ModelConfig"> | string
    isActive?: BoolFilter<"ModelConfig"> | boolean
    evalRuns?: EvalRunListRelationFilter
  }

  export type ModelConfigOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    modelId?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    evalRuns?: EvalRunOrderByRelationAggregateInput
  }

  export type ModelConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_modelId?: ModelConfigProviderModelIdCompoundUniqueInput
    AND?: ModelConfigWhereInput | ModelConfigWhereInput[]
    OR?: ModelConfigWhereInput[]
    NOT?: ModelConfigWhereInput | ModelConfigWhereInput[]
    provider?: StringFilter<"ModelConfig"> | string
    modelId?: StringFilter<"ModelConfig"> | string
    displayName?: StringFilter<"ModelConfig"> | string
    isActive?: BoolFilter<"ModelConfig"> | boolean
    evalRuns?: EvalRunListRelationFilter
  }, "id" | "provider_modelId">

  export type ModelConfigOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    modelId?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
    _count?: ModelConfigCountOrderByAggregateInput
    _max?: ModelConfigMaxOrderByAggregateInput
    _min?: ModelConfigMinOrderByAggregateInput
  }

  export type ModelConfigScalarWhereWithAggregatesInput = {
    AND?: ModelConfigScalarWhereWithAggregatesInput | ModelConfigScalarWhereWithAggregatesInput[]
    OR?: ModelConfigScalarWhereWithAggregatesInput[]
    NOT?: ModelConfigScalarWhereWithAggregatesInput | ModelConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModelConfig"> | string
    provider?: StringWithAggregatesFilter<"ModelConfig"> | string
    modelId?: StringWithAggregatesFilter<"ModelConfig"> | string
    displayName?: StringWithAggregatesFilter<"ModelConfig"> | string
    isActive?: BoolWithAggregatesFilter<"ModelConfig"> | boolean
  }

  export type EvalRunWhereInput = {
    AND?: EvalRunWhereInput | EvalRunWhereInput[]
    OR?: EvalRunWhereInput[]
    NOT?: EvalRunWhereInput | EvalRunWhereInput[]
    id?: StringFilter<"EvalRun"> | string
    datasetId?: StringFilter<"EvalRun"> | string
    promptId?: StringFilter<"EvalRun"> | string
    modelConfigId?: StringFilter<"EvalRun"> | string
    status?: StringFilter<"EvalRun"> | string
    startedAt?: DateTimeNullableFilter<"EvalRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EvalRun"> | Date | string | null
    aggregateScore?: JsonNullableFilter<"EvalRun">
    createdAt?: DateTimeFilter<"EvalRun"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    prompt?: XOR<PromptTemplateScalarRelationFilter, PromptTemplateWhereInput>
    modelConfig?: XOR<ModelConfigScalarRelationFilter, ModelConfigWhereInput>
    results?: EvalResultListRelationFilter
  }

  export type EvalRunOrderByWithRelationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    promptId?: SortOrder
    modelConfigId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    aggregateScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dataset?: DatasetOrderByWithRelationInput
    prompt?: PromptTemplateOrderByWithRelationInput
    modelConfig?: ModelConfigOrderByWithRelationInput
    results?: EvalResultOrderByRelationAggregateInput
  }

  export type EvalRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvalRunWhereInput | EvalRunWhereInput[]
    OR?: EvalRunWhereInput[]
    NOT?: EvalRunWhereInput | EvalRunWhereInput[]
    datasetId?: StringFilter<"EvalRun"> | string
    promptId?: StringFilter<"EvalRun"> | string
    modelConfigId?: StringFilter<"EvalRun"> | string
    status?: StringFilter<"EvalRun"> | string
    startedAt?: DateTimeNullableFilter<"EvalRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EvalRun"> | Date | string | null
    aggregateScore?: JsonNullableFilter<"EvalRun">
    createdAt?: DateTimeFilter<"EvalRun"> | Date | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    prompt?: XOR<PromptTemplateScalarRelationFilter, PromptTemplateWhereInput>
    modelConfig?: XOR<ModelConfigScalarRelationFilter, ModelConfigWhereInput>
    results?: EvalResultListRelationFilter
  }, "id">

  export type EvalRunOrderByWithAggregationInput = {
    id?: SortOrder
    datasetId?: SortOrder
    promptId?: SortOrder
    modelConfigId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    aggregateScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EvalRunCountOrderByAggregateInput
    _max?: EvalRunMaxOrderByAggregateInput
    _min?: EvalRunMinOrderByAggregateInput
  }

  export type EvalRunScalarWhereWithAggregatesInput = {
    AND?: EvalRunScalarWhereWithAggregatesInput | EvalRunScalarWhereWithAggregatesInput[]
    OR?: EvalRunScalarWhereWithAggregatesInput[]
    NOT?: EvalRunScalarWhereWithAggregatesInput | EvalRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvalRun"> | string
    datasetId?: StringWithAggregatesFilter<"EvalRun"> | string
    promptId?: StringWithAggregatesFilter<"EvalRun"> | string
    modelConfigId?: StringWithAggregatesFilter<"EvalRun"> | string
    status?: StringWithAggregatesFilter<"EvalRun"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"EvalRun"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"EvalRun"> | Date | string | null
    aggregateScore?: JsonNullableWithAggregatesFilter<"EvalRun">
    createdAt?: DateTimeWithAggregatesFilter<"EvalRun"> | Date | string
  }

  export type EvalResultWhereInput = {
    AND?: EvalResultWhereInput | EvalResultWhereInput[]
    OR?: EvalResultWhereInput[]
    NOT?: EvalResultWhereInput | EvalResultWhereInput[]
    id?: StringFilter<"EvalResult"> | string
    evalRunId?: StringFilter<"EvalResult"> | string
    documentId?: StringFilter<"EvalResult"> | string
    rawOutput?: StringFilter<"EvalResult"> | string
    parsedOutput?: JsonNullableFilter<"EvalResult">
    latencyMs?: IntFilter<"EvalResult"> | number
    tokenUsage?: JsonNullableFilter<"EvalResult">
    autoScore?: JsonNullableFilter<"EvalResult">
    evalRun?: XOR<EvalRunScalarRelationFilter, EvalRunWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    humanReview?: XOR<HumanReviewNullableScalarRelationFilter, HumanReviewWhereInput> | null
  }

  export type EvalResultOrderByWithRelationInput = {
    id?: SortOrder
    evalRunId?: SortOrder
    documentId?: SortOrder
    rawOutput?: SortOrder
    parsedOutput?: SortOrderInput | SortOrder
    latencyMs?: SortOrder
    tokenUsage?: SortOrderInput | SortOrder
    autoScore?: SortOrderInput | SortOrder
    evalRun?: EvalRunOrderByWithRelationInput
    document?: DocumentOrderByWithRelationInput
    humanReview?: HumanReviewOrderByWithRelationInput
  }

  export type EvalResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvalResultWhereInput | EvalResultWhereInput[]
    OR?: EvalResultWhereInput[]
    NOT?: EvalResultWhereInput | EvalResultWhereInput[]
    evalRunId?: StringFilter<"EvalResult"> | string
    documentId?: StringFilter<"EvalResult"> | string
    rawOutput?: StringFilter<"EvalResult"> | string
    parsedOutput?: JsonNullableFilter<"EvalResult">
    latencyMs?: IntFilter<"EvalResult"> | number
    tokenUsage?: JsonNullableFilter<"EvalResult">
    autoScore?: JsonNullableFilter<"EvalResult">
    evalRun?: XOR<EvalRunScalarRelationFilter, EvalRunWhereInput>
    document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
    humanReview?: XOR<HumanReviewNullableScalarRelationFilter, HumanReviewWhereInput> | null
  }, "id">

  export type EvalResultOrderByWithAggregationInput = {
    id?: SortOrder
    evalRunId?: SortOrder
    documentId?: SortOrder
    rawOutput?: SortOrder
    parsedOutput?: SortOrderInput | SortOrder
    latencyMs?: SortOrder
    tokenUsage?: SortOrderInput | SortOrder
    autoScore?: SortOrderInput | SortOrder
    _count?: EvalResultCountOrderByAggregateInput
    _avg?: EvalResultAvgOrderByAggregateInput
    _max?: EvalResultMaxOrderByAggregateInput
    _min?: EvalResultMinOrderByAggregateInput
    _sum?: EvalResultSumOrderByAggregateInput
  }

  export type EvalResultScalarWhereWithAggregatesInput = {
    AND?: EvalResultScalarWhereWithAggregatesInput | EvalResultScalarWhereWithAggregatesInput[]
    OR?: EvalResultScalarWhereWithAggregatesInput[]
    NOT?: EvalResultScalarWhereWithAggregatesInput | EvalResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EvalResult"> | string
    evalRunId?: StringWithAggregatesFilter<"EvalResult"> | string
    documentId?: StringWithAggregatesFilter<"EvalResult"> | string
    rawOutput?: StringWithAggregatesFilter<"EvalResult"> | string
    parsedOutput?: JsonNullableWithAggregatesFilter<"EvalResult">
    latencyMs?: IntWithAggregatesFilter<"EvalResult"> | number
    tokenUsage?: JsonNullableWithAggregatesFilter<"EvalResult">
    autoScore?: JsonNullableWithAggregatesFilter<"EvalResult">
  }

  export type HumanReviewWhereInput = {
    AND?: HumanReviewWhereInput | HumanReviewWhereInput[]
    OR?: HumanReviewWhereInput[]
    NOT?: HumanReviewWhereInput | HumanReviewWhereInput[]
    id?: StringFilter<"HumanReview"> | string
    evalResultId?: StringFilter<"HumanReview"> | string
    reviewerId?: StringNullableFilter<"HumanReview"> | string | null
    score?: FloatFilter<"HumanReview"> | number
    entityScores?: JsonNullableFilter<"HumanReview">
    notes?: StringNullableFilter<"HumanReview"> | string | null
    createdAt?: DateTimeFilter<"HumanReview"> | Date | string
    evalResult?: XOR<EvalResultScalarRelationFilter, EvalResultWhereInput>
  }

  export type HumanReviewOrderByWithRelationInput = {
    id?: SortOrder
    evalResultId?: SortOrder
    reviewerId?: SortOrderInput | SortOrder
    score?: SortOrder
    entityScores?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    evalResult?: EvalResultOrderByWithRelationInput
  }

  export type HumanReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    evalResultId?: string
    AND?: HumanReviewWhereInput | HumanReviewWhereInput[]
    OR?: HumanReviewWhereInput[]
    NOT?: HumanReviewWhereInput | HumanReviewWhereInput[]
    reviewerId?: StringNullableFilter<"HumanReview"> | string | null
    score?: FloatFilter<"HumanReview"> | number
    entityScores?: JsonNullableFilter<"HumanReview">
    notes?: StringNullableFilter<"HumanReview"> | string | null
    createdAt?: DateTimeFilter<"HumanReview"> | Date | string
    evalResult?: XOR<EvalResultScalarRelationFilter, EvalResultWhereInput>
  }, "id" | "evalResultId">

  export type HumanReviewOrderByWithAggregationInput = {
    id?: SortOrder
    evalResultId?: SortOrder
    reviewerId?: SortOrderInput | SortOrder
    score?: SortOrder
    entityScores?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HumanReviewCountOrderByAggregateInput
    _avg?: HumanReviewAvgOrderByAggregateInput
    _max?: HumanReviewMaxOrderByAggregateInput
    _min?: HumanReviewMinOrderByAggregateInput
    _sum?: HumanReviewSumOrderByAggregateInput
  }

  export type HumanReviewScalarWhereWithAggregatesInput = {
    AND?: HumanReviewScalarWhereWithAggregatesInput | HumanReviewScalarWhereWithAggregatesInput[]
    OR?: HumanReviewScalarWhereWithAggregatesInput[]
    NOT?: HumanReviewScalarWhereWithAggregatesInput | HumanReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HumanReview"> | string
    evalResultId?: StringWithAggregatesFilter<"HumanReview"> | string
    reviewerId?: StringNullableWithAggregatesFilter<"HumanReview"> | string | null
    score?: FloatWithAggregatesFilter<"HumanReview"> | number
    entityScores?: JsonNullableWithAggregatesFilter<"HumanReview">
    notes?: StringNullableWithAggregatesFilter<"HumanReview"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"HumanReview"> | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt?: Date | string
    datasetDocs?: DatasetDocumentCreateNestedManyWithoutDocumentInput
    evalResults?: EvalResultCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt?: Date | string
    datasetDocs?: DatasetDocumentUncheckedCreateNestedManyWithoutDocumentInput
    evalResults?: EvalResultUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetDocs?: DatasetDocumentUpdateManyWithoutDocumentNestedInput
    evalResults?: EvalResultUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetDocs?: DatasetDocumentUncheckedUpdateManyWithoutDocumentNestedInput
    evalResults?: EvalResultUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    documents?: DatasetDocumentCreateNestedManyWithoutDatasetInput
    evalRuns?: EvalRunCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    documents?: DatasetDocumentUncheckedCreateNestedManyWithoutDatasetInput
    evalRuns?: EvalRunUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DatasetDocumentUpdateManyWithoutDatasetNestedInput
    evalRuns?: EvalRunUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DatasetDocumentUncheckedUpdateManyWithoutDatasetNestedInput
    evalRuns?: EvalRunUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type DatasetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetDocumentCreateInput = {
    id?: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
    dataset: DatasetCreateNestedOneWithoutDocumentsInput
    document: DocumentCreateNestedOneWithoutDatasetDocsInput
  }

  export type DatasetDocumentUncheckedCreateInput = {
    id?: string
    datasetId: string
    documentId: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
    dataset?: DatasetUpdateOneRequiredWithoutDocumentsNestedInput
    document?: DocumentUpdateOneRequiredWithoutDatasetDocsNestedInput
  }

  export type DatasetDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentCreateManyInput = {
    id?: string
    datasetId: string
    documentId: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PromptTemplateCreateInput = {
    id?: string
    name: string
    version?: number
    systemPrompt: string
    userPrompt: string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: string | null
    createdAt?: Date | string
    evalRuns?: EvalRunCreateNestedManyWithoutPromptInput
  }

  export type PromptTemplateUncheckedCreateInput = {
    id?: string
    name: string
    version?: number
    systemPrompt: string
    userPrompt: string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: string | null
    createdAt?: Date | string
    evalRuns?: EvalRunUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalRuns?: EvalRunUpdateManyWithoutPromptNestedInput
  }

  export type PromptTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalRuns?: EvalRunUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptTemplateCreateManyInput = {
    id?: string
    name: string
    version?: number
    systemPrompt: string
    userPrompt: string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: string | null
    createdAt?: Date | string
  }

  export type PromptTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelConfigCreateInput = {
    id?: string
    provider: string
    modelId: string
    displayName: string
    isActive?: boolean
    evalRuns?: EvalRunCreateNestedManyWithoutModelConfigInput
  }

  export type ModelConfigUncheckedCreateInput = {
    id?: string
    provider: string
    modelId: string
    displayName: string
    isActive?: boolean
    evalRuns?: EvalRunUncheckedCreateNestedManyWithoutModelConfigInput
  }

  export type ModelConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    evalRuns?: EvalRunUpdateManyWithoutModelConfigNestedInput
  }

  export type ModelConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    evalRuns?: EvalRunUncheckedUpdateManyWithoutModelConfigNestedInput
  }

  export type ModelConfigCreateManyInput = {
    id?: string
    provider: string
    modelId: string
    displayName: string
    isActive?: boolean
  }

  export type ModelConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EvalRunCreateInput = {
    id?: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutEvalRunsInput
    prompt: PromptTemplateCreateNestedOneWithoutEvalRunsInput
    modelConfig: ModelConfigCreateNestedOneWithoutEvalRunsInput
    results?: EvalResultCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunUncheckedCreateInput = {
    id?: string
    datasetId: string
    promptId: string
    modelConfigId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    results?: EvalResultUncheckedCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutEvalRunsNestedInput
    prompt?: PromptTemplateUpdateOneRequiredWithoutEvalRunsNestedInput
    modelConfig?: ModelConfigUpdateOneRequiredWithoutEvalRunsNestedInput
    results?: EvalResultUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    modelConfigId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: EvalResultUncheckedUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunCreateManyInput = {
    id?: string
    datasetId: string
    promptId: string
    modelConfigId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EvalRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    modelConfigId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalResultCreateInput = {
    id?: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    evalRun: EvalRunCreateNestedOneWithoutResultsInput
    document: DocumentCreateNestedOneWithoutEvalResultsInput
    humanReview?: HumanReviewCreateNestedOneWithoutEvalResultInput
  }

  export type EvalResultUncheckedCreateInput = {
    id?: string
    evalRunId: string
    documentId: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    humanReview?: HumanReviewUncheckedCreateNestedOneWithoutEvalResultInput
  }

  export type EvalResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    evalRun?: EvalRunUpdateOneRequiredWithoutResultsNestedInput
    document?: DocumentUpdateOneRequiredWithoutEvalResultsNestedInput
    humanReview?: HumanReviewUpdateOneWithoutEvalResultNestedInput
  }

  export type EvalResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRunId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    humanReview?: HumanReviewUncheckedUpdateOneWithoutEvalResultNestedInput
  }

  export type EvalResultCreateManyInput = {
    id?: string
    evalRunId: string
    documentId: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRunId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HumanReviewCreateInput = {
    id?: string
    reviewerId?: string | null
    score: number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    evalResult: EvalResultCreateNestedOneWithoutHumanReviewInput
  }

  export type HumanReviewUncheckedCreateInput = {
    id?: string
    evalResultId: string
    reviewerId?: string | null
    score: number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type HumanReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalResult?: EvalResultUpdateOneRequiredWithoutHumanReviewNestedInput
  }

  export type HumanReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalResultId?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanReviewCreateManyInput = {
    id?: string
    evalResultId: string
    reviewerId?: string | null
    score: number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type HumanReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalResultId?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DatasetDocumentListRelationFilter = {
    every?: DatasetDocumentWhereInput
    some?: DatasetDocumentWhereInput
    none?: DatasetDocumentWhereInput
  }

  export type EvalResultListRelationFilter = {
    every?: EvalResultWhereInput
    some?: EvalResultWhereInput
    none?: EvalResultWhereInput
  }

  export type DatasetDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvalResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    storagePath?: SortOrder
    extractedText?: SortOrder
    pageCount?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    pageCount?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    storagePath?: SortOrder
    extractedText?: SortOrder
    pageCount?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    originalName?: SortOrder
    storagePath?: SortOrder
    extractedText?: SortOrder
    pageCount?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    pageCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EvalRunListRelationFilter = {
    every?: EvalRunWhereInput
    some?: EvalRunWhereInput
    none?: EvalRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EvalRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatasetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DatasetScalarRelationFilter = {
    is?: DatasetWhereInput
    isNot?: DatasetWhereInput
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type DatasetDocumentDatasetIdDocumentIdCompoundUniqueInput = {
    datasetId: string
    documentId: string
  }

  export type DatasetDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    documentId?: SortOrder
    groundTruth?: SortOrder
  }

  export type DatasetDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    documentId?: SortOrder
  }

  export type DatasetDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    documentId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PromptTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    userPrompt?: SortOrder
    outputSchema?: SortOrder
    node?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptTemplateAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type PromptTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    userPrompt?: SortOrder
    node?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    systemPrompt?: SortOrder
    userPrompt?: SortOrder
    node?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptTemplateSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ModelConfigProviderModelIdCompoundUniqueInput = {
    provider: string
    modelId: string
  }

  export type ModelConfigCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    modelId?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type ModelConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    modelId?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type ModelConfigMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    modelId?: SortOrder
    displayName?: SortOrder
    isActive?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PromptTemplateScalarRelationFilter = {
    is?: PromptTemplateWhereInput
    isNot?: PromptTemplateWhereInput
  }

  export type ModelConfigScalarRelationFilter = {
    is?: ModelConfigWhereInput
    isNot?: ModelConfigWhereInput
  }

  export type EvalRunCountOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    promptId?: SortOrder
    modelConfigId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    aggregateScore?: SortOrder
    createdAt?: SortOrder
  }

  export type EvalRunMaxOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    promptId?: SortOrder
    modelConfigId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EvalRunMinOrderByAggregateInput = {
    id?: SortOrder
    datasetId?: SortOrder
    promptId?: SortOrder
    modelConfigId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EvalRunScalarRelationFilter = {
    is?: EvalRunWhereInput
    isNot?: EvalRunWhereInput
  }

  export type HumanReviewNullableScalarRelationFilter = {
    is?: HumanReviewWhereInput | null
    isNot?: HumanReviewWhereInput | null
  }

  export type EvalResultCountOrderByAggregateInput = {
    id?: SortOrder
    evalRunId?: SortOrder
    documentId?: SortOrder
    rawOutput?: SortOrder
    parsedOutput?: SortOrder
    latencyMs?: SortOrder
    tokenUsage?: SortOrder
    autoScore?: SortOrder
  }

  export type EvalResultAvgOrderByAggregateInput = {
    latencyMs?: SortOrder
  }

  export type EvalResultMaxOrderByAggregateInput = {
    id?: SortOrder
    evalRunId?: SortOrder
    documentId?: SortOrder
    rawOutput?: SortOrder
    latencyMs?: SortOrder
  }

  export type EvalResultMinOrderByAggregateInput = {
    id?: SortOrder
    evalRunId?: SortOrder
    documentId?: SortOrder
    rawOutput?: SortOrder
    latencyMs?: SortOrder
  }

  export type EvalResultSumOrderByAggregateInput = {
    latencyMs?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EvalResultScalarRelationFilter = {
    is?: EvalResultWhereInput
    isNot?: EvalResultWhereInput
  }

  export type HumanReviewCountOrderByAggregateInput = {
    id?: SortOrder
    evalResultId?: SortOrder
    reviewerId?: SortOrder
    score?: SortOrder
    entityScores?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HumanReviewAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type HumanReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    evalResultId?: SortOrder
    reviewerId?: SortOrder
    score?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HumanReviewMinOrderByAggregateInput = {
    id?: SortOrder
    evalResultId?: SortOrder
    reviewerId?: SortOrder
    score?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type HumanReviewSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DatasetDocumentCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DatasetDocumentCreateWithoutDocumentInput, DatasetDocumentUncheckedCreateWithoutDocumentInput> | DatasetDocumentCreateWithoutDocumentInput[] | DatasetDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDocumentInput | DatasetDocumentCreateOrConnectWithoutDocumentInput[]
    createMany?: DatasetDocumentCreateManyDocumentInputEnvelope
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
  }

  export type EvalResultCreateNestedManyWithoutDocumentInput = {
    create?: XOR<EvalResultCreateWithoutDocumentInput, EvalResultUncheckedCreateWithoutDocumentInput> | EvalResultCreateWithoutDocumentInput[] | EvalResultUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutDocumentInput | EvalResultCreateOrConnectWithoutDocumentInput[]
    createMany?: EvalResultCreateManyDocumentInputEnvelope
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
  }

  export type DatasetDocumentUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<DatasetDocumentCreateWithoutDocumentInput, DatasetDocumentUncheckedCreateWithoutDocumentInput> | DatasetDocumentCreateWithoutDocumentInput[] | DatasetDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDocumentInput | DatasetDocumentCreateOrConnectWithoutDocumentInput[]
    createMany?: DatasetDocumentCreateManyDocumentInputEnvelope
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
  }

  export type EvalResultUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<EvalResultCreateWithoutDocumentInput, EvalResultUncheckedCreateWithoutDocumentInput> | EvalResultCreateWithoutDocumentInput[] | EvalResultUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutDocumentInput | EvalResultCreateOrConnectWithoutDocumentInput[]
    createMany?: EvalResultCreateManyDocumentInputEnvelope
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DatasetDocumentUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DatasetDocumentCreateWithoutDocumentInput, DatasetDocumentUncheckedCreateWithoutDocumentInput> | DatasetDocumentCreateWithoutDocumentInput[] | DatasetDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDocumentInput | DatasetDocumentCreateOrConnectWithoutDocumentInput[]
    upsert?: DatasetDocumentUpsertWithWhereUniqueWithoutDocumentInput | DatasetDocumentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DatasetDocumentCreateManyDocumentInputEnvelope
    set?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    disconnect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    delete?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    update?: DatasetDocumentUpdateWithWhereUniqueWithoutDocumentInput | DatasetDocumentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DatasetDocumentUpdateManyWithWhereWithoutDocumentInput | DatasetDocumentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DatasetDocumentScalarWhereInput | DatasetDocumentScalarWhereInput[]
  }

  export type EvalResultUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<EvalResultCreateWithoutDocumentInput, EvalResultUncheckedCreateWithoutDocumentInput> | EvalResultCreateWithoutDocumentInput[] | EvalResultUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutDocumentInput | EvalResultCreateOrConnectWithoutDocumentInput[]
    upsert?: EvalResultUpsertWithWhereUniqueWithoutDocumentInput | EvalResultUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: EvalResultCreateManyDocumentInputEnvelope
    set?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    disconnect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    delete?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    update?: EvalResultUpdateWithWhereUniqueWithoutDocumentInput | EvalResultUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: EvalResultUpdateManyWithWhereWithoutDocumentInput | EvalResultUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: EvalResultScalarWhereInput | EvalResultScalarWhereInput[]
  }

  export type DatasetDocumentUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<DatasetDocumentCreateWithoutDocumentInput, DatasetDocumentUncheckedCreateWithoutDocumentInput> | DatasetDocumentCreateWithoutDocumentInput[] | DatasetDocumentUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDocumentInput | DatasetDocumentCreateOrConnectWithoutDocumentInput[]
    upsert?: DatasetDocumentUpsertWithWhereUniqueWithoutDocumentInput | DatasetDocumentUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: DatasetDocumentCreateManyDocumentInputEnvelope
    set?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    disconnect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    delete?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    update?: DatasetDocumentUpdateWithWhereUniqueWithoutDocumentInput | DatasetDocumentUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: DatasetDocumentUpdateManyWithWhereWithoutDocumentInput | DatasetDocumentUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: DatasetDocumentScalarWhereInput | DatasetDocumentScalarWhereInput[]
  }

  export type EvalResultUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<EvalResultCreateWithoutDocumentInput, EvalResultUncheckedCreateWithoutDocumentInput> | EvalResultCreateWithoutDocumentInput[] | EvalResultUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutDocumentInput | EvalResultCreateOrConnectWithoutDocumentInput[]
    upsert?: EvalResultUpsertWithWhereUniqueWithoutDocumentInput | EvalResultUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: EvalResultCreateManyDocumentInputEnvelope
    set?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    disconnect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    delete?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    update?: EvalResultUpdateWithWhereUniqueWithoutDocumentInput | EvalResultUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: EvalResultUpdateManyWithWhereWithoutDocumentInput | EvalResultUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: EvalResultScalarWhereInput | EvalResultScalarWhereInput[]
  }

  export type DatasetDocumentCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetDocumentCreateWithoutDatasetInput, DatasetDocumentUncheckedCreateWithoutDatasetInput> | DatasetDocumentCreateWithoutDatasetInput[] | DatasetDocumentUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDatasetInput | DatasetDocumentCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetDocumentCreateManyDatasetInputEnvelope
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
  }

  export type EvalRunCreateNestedManyWithoutDatasetInput = {
    create?: XOR<EvalRunCreateWithoutDatasetInput, EvalRunUncheckedCreateWithoutDatasetInput> | EvalRunCreateWithoutDatasetInput[] | EvalRunUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutDatasetInput | EvalRunCreateOrConnectWithoutDatasetInput[]
    createMany?: EvalRunCreateManyDatasetInputEnvelope
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
  }

  export type DatasetDocumentUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetDocumentCreateWithoutDatasetInput, DatasetDocumentUncheckedCreateWithoutDatasetInput> | DatasetDocumentCreateWithoutDatasetInput[] | DatasetDocumentUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDatasetInput | DatasetDocumentCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetDocumentCreateManyDatasetInputEnvelope
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
  }

  export type EvalRunUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<EvalRunCreateWithoutDatasetInput, EvalRunUncheckedCreateWithoutDatasetInput> | EvalRunCreateWithoutDatasetInput[] | EvalRunUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutDatasetInput | EvalRunCreateOrConnectWithoutDatasetInput[]
    createMany?: EvalRunCreateManyDatasetInputEnvelope
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DatasetDocumentUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetDocumentCreateWithoutDatasetInput, DatasetDocumentUncheckedCreateWithoutDatasetInput> | DatasetDocumentCreateWithoutDatasetInput[] | DatasetDocumentUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDatasetInput | DatasetDocumentCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetDocumentUpsertWithWhereUniqueWithoutDatasetInput | DatasetDocumentUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetDocumentCreateManyDatasetInputEnvelope
    set?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    disconnect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    delete?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    update?: DatasetDocumentUpdateWithWhereUniqueWithoutDatasetInput | DatasetDocumentUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetDocumentUpdateManyWithWhereWithoutDatasetInput | DatasetDocumentUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetDocumentScalarWhereInput | DatasetDocumentScalarWhereInput[]
  }

  export type EvalRunUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<EvalRunCreateWithoutDatasetInput, EvalRunUncheckedCreateWithoutDatasetInput> | EvalRunCreateWithoutDatasetInput[] | EvalRunUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutDatasetInput | EvalRunCreateOrConnectWithoutDatasetInput[]
    upsert?: EvalRunUpsertWithWhereUniqueWithoutDatasetInput | EvalRunUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: EvalRunCreateManyDatasetInputEnvelope
    set?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    disconnect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    delete?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    update?: EvalRunUpdateWithWhereUniqueWithoutDatasetInput | EvalRunUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: EvalRunUpdateManyWithWhereWithoutDatasetInput | EvalRunUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
  }

  export type DatasetDocumentUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetDocumentCreateWithoutDatasetInput, DatasetDocumentUncheckedCreateWithoutDatasetInput> | DatasetDocumentCreateWithoutDatasetInput[] | DatasetDocumentUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetDocumentCreateOrConnectWithoutDatasetInput | DatasetDocumentCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetDocumentUpsertWithWhereUniqueWithoutDatasetInput | DatasetDocumentUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetDocumentCreateManyDatasetInputEnvelope
    set?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    disconnect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    delete?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    connect?: DatasetDocumentWhereUniqueInput | DatasetDocumentWhereUniqueInput[]
    update?: DatasetDocumentUpdateWithWhereUniqueWithoutDatasetInput | DatasetDocumentUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetDocumentUpdateManyWithWhereWithoutDatasetInput | DatasetDocumentUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetDocumentScalarWhereInput | DatasetDocumentScalarWhereInput[]
  }

  export type EvalRunUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<EvalRunCreateWithoutDatasetInput, EvalRunUncheckedCreateWithoutDatasetInput> | EvalRunCreateWithoutDatasetInput[] | EvalRunUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutDatasetInput | EvalRunCreateOrConnectWithoutDatasetInput[]
    upsert?: EvalRunUpsertWithWhereUniqueWithoutDatasetInput | EvalRunUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: EvalRunCreateManyDatasetInputEnvelope
    set?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    disconnect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    delete?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    update?: EvalRunUpdateWithWhereUniqueWithoutDatasetInput | EvalRunUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: EvalRunUpdateManyWithWhereWithoutDatasetInput | EvalRunUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
  }

  export type DatasetCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DatasetCreateWithoutDocumentsInput, DatasetUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutDocumentsInput
    connect?: DatasetWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutDatasetDocsInput = {
    create?: XOR<DocumentCreateWithoutDatasetDocsInput, DocumentUncheckedCreateWithoutDatasetDocsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutDatasetDocsInput
    connect?: DocumentWhereUniqueInput
  }

  export type DatasetUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DatasetCreateWithoutDocumentsInput, DatasetUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutDocumentsInput
    upsert?: DatasetUpsertWithoutDocumentsInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutDocumentsInput, DatasetUpdateWithoutDocumentsInput>, DatasetUncheckedUpdateWithoutDocumentsInput>
  }

  export type DocumentUpdateOneRequiredWithoutDatasetDocsNestedInput = {
    create?: XOR<DocumentCreateWithoutDatasetDocsInput, DocumentUncheckedCreateWithoutDatasetDocsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutDatasetDocsInput
    upsert?: DocumentUpsertWithoutDatasetDocsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutDatasetDocsInput, DocumentUpdateWithoutDatasetDocsInput>, DocumentUncheckedUpdateWithoutDatasetDocsInput>
  }

  export type EvalRunCreateNestedManyWithoutPromptInput = {
    create?: XOR<EvalRunCreateWithoutPromptInput, EvalRunUncheckedCreateWithoutPromptInput> | EvalRunCreateWithoutPromptInput[] | EvalRunUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutPromptInput | EvalRunCreateOrConnectWithoutPromptInput[]
    createMany?: EvalRunCreateManyPromptInputEnvelope
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
  }

  export type EvalRunUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<EvalRunCreateWithoutPromptInput, EvalRunUncheckedCreateWithoutPromptInput> | EvalRunCreateWithoutPromptInput[] | EvalRunUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutPromptInput | EvalRunCreateOrConnectWithoutPromptInput[]
    createMany?: EvalRunCreateManyPromptInputEnvelope
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
  }

  export type EvalRunUpdateManyWithoutPromptNestedInput = {
    create?: XOR<EvalRunCreateWithoutPromptInput, EvalRunUncheckedCreateWithoutPromptInput> | EvalRunCreateWithoutPromptInput[] | EvalRunUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutPromptInput | EvalRunCreateOrConnectWithoutPromptInput[]
    upsert?: EvalRunUpsertWithWhereUniqueWithoutPromptInput | EvalRunUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: EvalRunCreateManyPromptInputEnvelope
    set?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    disconnect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    delete?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    update?: EvalRunUpdateWithWhereUniqueWithoutPromptInput | EvalRunUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: EvalRunUpdateManyWithWhereWithoutPromptInput | EvalRunUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
  }

  export type EvalRunUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<EvalRunCreateWithoutPromptInput, EvalRunUncheckedCreateWithoutPromptInput> | EvalRunCreateWithoutPromptInput[] | EvalRunUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutPromptInput | EvalRunCreateOrConnectWithoutPromptInput[]
    upsert?: EvalRunUpsertWithWhereUniqueWithoutPromptInput | EvalRunUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: EvalRunCreateManyPromptInputEnvelope
    set?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    disconnect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    delete?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    update?: EvalRunUpdateWithWhereUniqueWithoutPromptInput | EvalRunUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: EvalRunUpdateManyWithWhereWithoutPromptInput | EvalRunUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
  }

  export type EvalRunCreateNestedManyWithoutModelConfigInput = {
    create?: XOR<EvalRunCreateWithoutModelConfigInput, EvalRunUncheckedCreateWithoutModelConfigInput> | EvalRunCreateWithoutModelConfigInput[] | EvalRunUncheckedCreateWithoutModelConfigInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutModelConfigInput | EvalRunCreateOrConnectWithoutModelConfigInput[]
    createMany?: EvalRunCreateManyModelConfigInputEnvelope
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
  }

  export type EvalRunUncheckedCreateNestedManyWithoutModelConfigInput = {
    create?: XOR<EvalRunCreateWithoutModelConfigInput, EvalRunUncheckedCreateWithoutModelConfigInput> | EvalRunCreateWithoutModelConfigInput[] | EvalRunUncheckedCreateWithoutModelConfigInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutModelConfigInput | EvalRunCreateOrConnectWithoutModelConfigInput[]
    createMany?: EvalRunCreateManyModelConfigInputEnvelope
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EvalRunUpdateManyWithoutModelConfigNestedInput = {
    create?: XOR<EvalRunCreateWithoutModelConfigInput, EvalRunUncheckedCreateWithoutModelConfigInput> | EvalRunCreateWithoutModelConfigInput[] | EvalRunUncheckedCreateWithoutModelConfigInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutModelConfigInput | EvalRunCreateOrConnectWithoutModelConfigInput[]
    upsert?: EvalRunUpsertWithWhereUniqueWithoutModelConfigInput | EvalRunUpsertWithWhereUniqueWithoutModelConfigInput[]
    createMany?: EvalRunCreateManyModelConfigInputEnvelope
    set?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    disconnect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    delete?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    update?: EvalRunUpdateWithWhereUniqueWithoutModelConfigInput | EvalRunUpdateWithWhereUniqueWithoutModelConfigInput[]
    updateMany?: EvalRunUpdateManyWithWhereWithoutModelConfigInput | EvalRunUpdateManyWithWhereWithoutModelConfigInput[]
    deleteMany?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
  }

  export type EvalRunUncheckedUpdateManyWithoutModelConfigNestedInput = {
    create?: XOR<EvalRunCreateWithoutModelConfigInput, EvalRunUncheckedCreateWithoutModelConfigInput> | EvalRunCreateWithoutModelConfigInput[] | EvalRunUncheckedCreateWithoutModelConfigInput[]
    connectOrCreate?: EvalRunCreateOrConnectWithoutModelConfigInput | EvalRunCreateOrConnectWithoutModelConfigInput[]
    upsert?: EvalRunUpsertWithWhereUniqueWithoutModelConfigInput | EvalRunUpsertWithWhereUniqueWithoutModelConfigInput[]
    createMany?: EvalRunCreateManyModelConfigInputEnvelope
    set?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    disconnect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    delete?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    connect?: EvalRunWhereUniqueInput | EvalRunWhereUniqueInput[]
    update?: EvalRunUpdateWithWhereUniqueWithoutModelConfigInput | EvalRunUpdateWithWhereUniqueWithoutModelConfigInput[]
    updateMany?: EvalRunUpdateManyWithWhereWithoutModelConfigInput | EvalRunUpdateManyWithWhereWithoutModelConfigInput[]
    deleteMany?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
  }

  export type DatasetCreateNestedOneWithoutEvalRunsInput = {
    create?: XOR<DatasetCreateWithoutEvalRunsInput, DatasetUncheckedCreateWithoutEvalRunsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutEvalRunsInput
    connect?: DatasetWhereUniqueInput
  }

  export type PromptTemplateCreateNestedOneWithoutEvalRunsInput = {
    create?: XOR<PromptTemplateCreateWithoutEvalRunsInput, PromptTemplateUncheckedCreateWithoutEvalRunsInput>
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutEvalRunsInput
    connect?: PromptTemplateWhereUniqueInput
  }

  export type ModelConfigCreateNestedOneWithoutEvalRunsInput = {
    create?: XOR<ModelConfigCreateWithoutEvalRunsInput, ModelConfigUncheckedCreateWithoutEvalRunsInput>
    connectOrCreate?: ModelConfigCreateOrConnectWithoutEvalRunsInput
    connect?: ModelConfigWhereUniqueInput
  }

  export type EvalResultCreateNestedManyWithoutEvalRunInput = {
    create?: XOR<EvalResultCreateWithoutEvalRunInput, EvalResultUncheckedCreateWithoutEvalRunInput> | EvalResultCreateWithoutEvalRunInput[] | EvalResultUncheckedCreateWithoutEvalRunInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutEvalRunInput | EvalResultCreateOrConnectWithoutEvalRunInput[]
    createMany?: EvalResultCreateManyEvalRunInputEnvelope
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
  }

  export type EvalResultUncheckedCreateNestedManyWithoutEvalRunInput = {
    create?: XOR<EvalResultCreateWithoutEvalRunInput, EvalResultUncheckedCreateWithoutEvalRunInput> | EvalResultCreateWithoutEvalRunInput[] | EvalResultUncheckedCreateWithoutEvalRunInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutEvalRunInput | EvalResultCreateOrConnectWithoutEvalRunInput[]
    createMany?: EvalResultCreateManyEvalRunInputEnvelope
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DatasetUpdateOneRequiredWithoutEvalRunsNestedInput = {
    create?: XOR<DatasetCreateWithoutEvalRunsInput, DatasetUncheckedCreateWithoutEvalRunsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutEvalRunsInput
    upsert?: DatasetUpsertWithoutEvalRunsInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutEvalRunsInput, DatasetUpdateWithoutEvalRunsInput>, DatasetUncheckedUpdateWithoutEvalRunsInput>
  }

  export type PromptTemplateUpdateOneRequiredWithoutEvalRunsNestedInput = {
    create?: XOR<PromptTemplateCreateWithoutEvalRunsInput, PromptTemplateUncheckedCreateWithoutEvalRunsInput>
    connectOrCreate?: PromptTemplateCreateOrConnectWithoutEvalRunsInput
    upsert?: PromptTemplateUpsertWithoutEvalRunsInput
    connect?: PromptTemplateWhereUniqueInput
    update?: XOR<XOR<PromptTemplateUpdateToOneWithWhereWithoutEvalRunsInput, PromptTemplateUpdateWithoutEvalRunsInput>, PromptTemplateUncheckedUpdateWithoutEvalRunsInput>
  }

  export type ModelConfigUpdateOneRequiredWithoutEvalRunsNestedInput = {
    create?: XOR<ModelConfigCreateWithoutEvalRunsInput, ModelConfigUncheckedCreateWithoutEvalRunsInput>
    connectOrCreate?: ModelConfigCreateOrConnectWithoutEvalRunsInput
    upsert?: ModelConfigUpsertWithoutEvalRunsInput
    connect?: ModelConfigWhereUniqueInput
    update?: XOR<XOR<ModelConfigUpdateToOneWithWhereWithoutEvalRunsInput, ModelConfigUpdateWithoutEvalRunsInput>, ModelConfigUncheckedUpdateWithoutEvalRunsInput>
  }

  export type EvalResultUpdateManyWithoutEvalRunNestedInput = {
    create?: XOR<EvalResultCreateWithoutEvalRunInput, EvalResultUncheckedCreateWithoutEvalRunInput> | EvalResultCreateWithoutEvalRunInput[] | EvalResultUncheckedCreateWithoutEvalRunInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutEvalRunInput | EvalResultCreateOrConnectWithoutEvalRunInput[]
    upsert?: EvalResultUpsertWithWhereUniqueWithoutEvalRunInput | EvalResultUpsertWithWhereUniqueWithoutEvalRunInput[]
    createMany?: EvalResultCreateManyEvalRunInputEnvelope
    set?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    disconnect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    delete?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    update?: EvalResultUpdateWithWhereUniqueWithoutEvalRunInput | EvalResultUpdateWithWhereUniqueWithoutEvalRunInput[]
    updateMany?: EvalResultUpdateManyWithWhereWithoutEvalRunInput | EvalResultUpdateManyWithWhereWithoutEvalRunInput[]
    deleteMany?: EvalResultScalarWhereInput | EvalResultScalarWhereInput[]
  }

  export type EvalResultUncheckedUpdateManyWithoutEvalRunNestedInput = {
    create?: XOR<EvalResultCreateWithoutEvalRunInput, EvalResultUncheckedCreateWithoutEvalRunInput> | EvalResultCreateWithoutEvalRunInput[] | EvalResultUncheckedCreateWithoutEvalRunInput[]
    connectOrCreate?: EvalResultCreateOrConnectWithoutEvalRunInput | EvalResultCreateOrConnectWithoutEvalRunInput[]
    upsert?: EvalResultUpsertWithWhereUniqueWithoutEvalRunInput | EvalResultUpsertWithWhereUniqueWithoutEvalRunInput[]
    createMany?: EvalResultCreateManyEvalRunInputEnvelope
    set?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    disconnect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    delete?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    connect?: EvalResultWhereUniqueInput | EvalResultWhereUniqueInput[]
    update?: EvalResultUpdateWithWhereUniqueWithoutEvalRunInput | EvalResultUpdateWithWhereUniqueWithoutEvalRunInput[]
    updateMany?: EvalResultUpdateManyWithWhereWithoutEvalRunInput | EvalResultUpdateManyWithWhereWithoutEvalRunInput[]
    deleteMany?: EvalResultScalarWhereInput | EvalResultScalarWhereInput[]
  }

  export type EvalRunCreateNestedOneWithoutResultsInput = {
    create?: XOR<EvalRunCreateWithoutResultsInput, EvalRunUncheckedCreateWithoutResultsInput>
    connectOrCreate?: EvalRunCreateOrConnectWithoutResultsInput
    connect?: EvalRunWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutEvalResultsInput = {
    create?: XOR<DocumentCreateWithoutEvalResultsInput, DocumentUncheckedCreateWithoutEvalResultsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutEvalResultsInput
    connect?: DocumentWhereUniqueInput
  }

  export type HumanReviewCreateNestedOneWithoutEvalResultInput = {
    create?: XOR<HumanReviewCreateWithoutEvalResultInput, HumanReviewUncheckedCreateWithoutEvalResultInput>
    connectOrCreate?: HumanReviewCreateOrConnectWithoutEvalResultInput
    connect?: HumanReviewWhereUniqueInput
  }

  export type HumanReviewUncheckedCreateNestedOneWithoutEvalResultInput = {
    create?: XOR<HumanReviewCreateWithoutEvalResultInput, HumanReviewUncheckedCreateWithoutEvalResultInput>
    connectOrCreate?: HumanReviewCreateOrConnectWithoutEvalResultInput
    connect?: HumanReviewWhereUniqueInput
  }

  export type EvalRunUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<EvalRunCreateWithoutResultsInput, EvalRunUncheckedCreateWithoutResultsInput>
    connectOrCreate?: EvalRunCreateOrConnectWithoutResultsInput
    upsert?: EvalRunUpsertWithoutResultsInput
    connect?: EvalRunWhereUniqueInput
    update?: XOR<XOR<EvalRunUpdateToOneWithWhereWithoutResultsInput, EvalRunUpdateWithoutResultsInput>, EvalRunUncheckedUpdateWithoutResultsInput>
  }

  export type DocumentUpdateOneRequiredWithoutEvalResultsNestedInput = {
    create?: XOR<DocumentCreateWithoutEvalResultsInput, DocumentUncheckedCreateWithoutEvalResultsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutEvalResultsInput
    upsert?: DocumentUpsertWithoutEvalResultsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutEvalResultsInput, DocumentUpdateWithoutEvalResultsInput>, DocumentUncheckedUpdateWithoutEvalResultsInput>
  }

  export type HumanReviewUpdateOneWithoutEvalResultNestedInput = {
    create?: XOR<HumanReviewCreateWithoutEvalResultInput, HumanReviewUncheckedCreateWithoutEvalResultInput>
    connectOrCreate?: HumanReviewCreateOrConnectWithoutEvalResultInput
    upsert?: HumanReviewUpsertWithoutEvalResultInput
    disconnect?: HumanReviewWhereInput | boolean
    delete?: HumanReviewWhereInput | boolean
    connect?: HumanReviewWhereUniqueInput
    update?: XOR<XOR<HumanReviewUpdateToOneWithWhereWithoutEvalResultInput, HumanReviewUpdateWithoutEvalResultInput>, HumanReviewUncheckedUpdateWithoutEvalResultInput>
  }

  export type HumanReviewUncheckedUpdateOneWithoutEvalResultNestedInput = {
    create?: XOR<HumanReviewCreateWithoutEvalResultInput, HumanReviewUncheckedCreateWithoutEvalResultInput>
    connectOrCreate?: HumanReviewCreateOrConnectWithoutEvalResultInput
    upsert?: HumanReviewUpsertWithoutEvalResultInput
    disconnect?: HumanReviewWhereInput | boolean
    delete?: HumanReviewWhereInput | boolean
    connect?: HumanReviewWhereUniqueInput
    update?: XOR<XOR<HumanReviewUpdateToOneWithWhereWithoutEvalResultInput, HumanReviewUpdateWithoutEvalResultInput>, HumanReviewUncheckedUpdateWithoutEvalResultInput>
  }

  export type EvalResultCreateNestedOneWithoutHumanReviewInput = {
    create?: XOR<EvalResultCreateWithoutHumanReviewInput, EvalResultUncheckedCreateWithoutHumanReviewInput>
    connectOrCreate?: EvalResultCreateOrConnectWithoutHumanReviewInput
    connect?: EvalResultWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EvalResultUpdateOneRequiredWithoutHumanReviewNestedInput = {
    create?: XOR<EvalResultCreateWithoutHumanReviewInput, EvalResultUncheckedCreateWithoutHumanReviewInput>
    connectOrCreate?: EvalResultCreateOrConnectWithoutHumanReviewInput
    upsert?: EvalResultUpsertWithoutHumanReviewInput
    connect?: EvalResultWhereUniqueInput
    update?: XOR<XOR<EvalResultUpdateToOneWithWhereWithoutHumanReviewInput, EvalResultUpdateWithoutHumanReviewInput>, EvalResultUncheckedUpdateWithoutHumanReviewInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DatasetDocumentCreateWithoutDocumentInput = {
    id?: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
    dataset: DatasetCreateNestedOneWithoutDocumentsInput
  }

  export type DatasetDocumentUncheckedCreateWithoutDocumentInput = {
    id?: string
    datasetId: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentCreateOrConnectWithoutDocumentInput = {
    where: DatasetDocumentWhereUniqueInput
    create: XOR<DatasetDocumentCreateWithoutDocumentInput, DatasetDocumentUncheckedCreateWithoutDocumentInput>
  }

  export type DatasetDocumentCreateManyDocumentInputEnvelope = {
    data: DatasetDocumentCreateManyDocumentInput | DatasetDocumentCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type EvalResultCreateWithoutDocumentInput = {
    id?: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    evalRun: EvalRunCreateNestedOneWithoutResultsInput
    humanReview?: HumanReviewCreateNestedOneWithoutEvalResultInput
  }

  export type EvalResultUncheckedCreateWithoutDocumentInput = {
    id?: string
    evalRunId: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    humanReview?: HumanReviewUncheckedCreateNestedOneWithoutEvalResultInput
  }

  export type EvalResultCreateOrConnectWithoutDocumentInput = {
    where: EvalResultWhereUniqueInput
    create: XOR<EvalResultCreateWithoutDocumentInput, EvalResultUncheckedCreateWithoutDocumentInput>
  }

  export type EvalResultCreateManyDocumentInputEnvelope = {
    data: EvalResultCreateManyDocumentInput | EvalResultCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DatasetDocumentUpsertWithWhereUniqueWithoutDocumentInput = {
    where: DatasetDocumentWhereUniqueInput
    update: XOR<DatasetDocumentUpdateWithoutDocumentInput, DatasetDocumentUncheckedUpdateWithoutDocumentInput>
    create: XOR<DatasetDocumentCreateWithoutDocumentInput, DatasetDocumentUncheckedCreateWithoutDocumentInput>
  }

  export type DatasetDocumentUpdateWithWhereUniqueWithoutDocumentInput = {
    where: DatasetDocumentWhereUniqueInput
    data: XOR<DatasetDocumentUpdateWithoutDocumentInput, DatasetDocumentUncheckedUpdateWithoutDocumentInput>
  }

  export type DatasetDocumentUpdateManyWithWhereWithoutDocumentInput = {
    where: DatasetDocumentScalarWhereInput
    data: XOR<DatasetDocumentUpdateManyMutationInput, DatasetDocumentUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DatasetDocumentScalarWhereInput = {
    AND?: DatasetDocumentScalarWhereInput | DatasetDocumentScalarWhereInput[]
    OR?: DatasetDocumentScalarWhereInput[]
    NOT?: DatasetDocumentScalarWhereInput | DatasetDocumentScalarWhereInput[]
    id?: StringFilter<"DatasetDocument"> | string
    datasetId?: StringFilter<"DatasetDocument"> | string
    documentId?: StringFilter<"DatasetDocument"> | string
    groundTruth?: JsonNullableFilter<"DatasetDocument">
  }

  export type EvalResultUpsertWithWhereUniqueWithoutDocumentInput = {
    where: EvalResultWhereUniqueInput
    update: XOR<EvalResultUpdateWithoutDocumentInput, EvalResultUncheckedUpdateWithoutDocumentInput>
    create: XOR<EvalResultCreateWithoutDocumentInput, EvalResultUncheckedCreateWithoutDocumentInput>
  }

  export type EvalResultUpdateWithWhereUniqueWithoutDocumentInput = {
    where: EvalResultWhereUniqueInput
    data: XOR<EvalResultUpdateWithoutDocumentInput, EvalResultUncheckedUpdateWithoutDocumentInput>
  }

  export type EvalResultUpdateManyWithWhereWithoutDocumentInput = {
    where: EvalResultScalarWhereInput
    data: XOR<EvalResultUpdateManyMutationInput, EvalResultUncheckedUpdateManyWithoutDocumentInput>
  }

  export type EvalResultScalarWhereInput = {
    AND?: EvalResultScalarWhereInput | EvalResultScalarWhereInput[]
    OR?: EvalResultScalarWhereInput[]
    NOT?: EvalResultScalarWhereInput | EvalResultScalarWhereInput[]
    id?: StringFilter<"EvalResult"> | string
    evalRunId?: StringFilter<"EvalResult"> | string
    documentId?: StringFilter<"EvalResult"> | string
    rawOutput?: StringFilter<"EvalResult"> | string
    parsedOutput?: JsonNullableFilter<"EvalResult">
    latencyMs?: IntFilter<"EvalResult"> | number
    tokenUsage?: JsonNullableFilter<"EvalResult">
    autoScore?: JsonNullableFilter<"EvalResult">
  }

  export type DatasetDocumentCreateWithoutDatasetInput = {
    id?: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
    document: DocumentCreateNestedOneWithoutDatasetDocsInput
  }

  export type DatasetDocumentUncheckedCreateWithoutDatasetInput = {
    id?: string
    documentId: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentCreateOrConnectWithoutDatasetInput = {
    where: DatasetDocumentWhereUniqueInput
    create: XOR<DatasetDocumentCreateWithoutDatasetInput, DatasetDocumentUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetDocumentCreateManyDatasetInputEnvelope = {
    data: DatasetDocumentCreateManyDatasetInput | DatasetDocumentCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type EvalRunCreateWithoutDatasetInput = {
    id?: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    prompt: PromptTemplateCreateNestedOneWithoutEvalRunsInput
    modelConfig: ModelConfigCreateNestedOneWithoutEvalRunsInput
    results?: EvalResultCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunUncheckedCreateWithoutDatasetInput = {
    id?: string
    promptId: string
    modelConfigId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    results?: EvalResultUncheckedCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunCreateOrConnectWithoutDatasetInput = {
    where: EvalRunWhereUniqueInput
    create: XOR<EvalRunCreateWithoutDatasetInput, EvalRunUncheckedCreateWithoutDatasetInput>
  }

  export type EvalRunCreateManyDatasetInputEnvelope = {
    data: EvalRunCreateManyDatasetInput | EvalRunCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type DatasetDocumentUpsertWithWhereUniqueWithoutDatasetInput = {
    where: DatasetDocumentWhereUniqueInput
    update: XOR<DatasetDocumentUpdateWithoutDatasetInput, DatasetDocumentUncheckedUpdateWithoutDatasetInput>
    create: XOR<DatasetDocumentCreateWithoutDatasetInput, DatasetDocumentUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetDocumentUpdateWithWhereUniqueWithoutDatasetInput = {
    where: DatasetDocumentWhereUniqueInput
    data: XOR<DatasetDocumentUpdateWithoutDatasetInput, DatasetDocumentUncheckedUpdateWithoutDatasetInput>
  }

  export type DatasetDocumentUpdateManyWithWhereWithoutDatasetInput = {
    where: DatasetDocumentScalarWhereInput
    data: XOR<DatasetDocumentUpdateManyMutationInput, DatasetDocumentUncheckedUpdateManyWithoutDatasetInput>
  }

  export type EvalRunUpsertWithWhereUniqueWithoutDatasetInput = {
    where: EvalRunWhereUniqueInput
    update: XOR<EvalRunUpdateWithoutDatasetInput, EvalRunUncheckedUpdateWithoutDatasetInput>
    create: XOR<EvalRunCreateWithoutDatasetInput, EvalRunUncheckedCreateWithoutDatasetInput>
  }

  export type EvalRunUpdateWithWhereUniqueWithoutDatasetInput = {
    where: EvalRunWhereUniqueInput
    data: XOR<EvalRunUpdateWithoutDatasetInput, EvalRunUncheckedUpdateWithoutDatasetInput>
  }

  export type EvalRunUpdateManyWithWhereWithoutDatasetInput = {
    where: EvalRunScalarWhereInput
    data: XOR<EvalRunUpdateManyMutationInput, EvalRunUncheckedUpdateManyWithoutDatasetInput>
  }

  export type EvalRunScalarWhereInput = {
    AND?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
    OR?: EvalRunScalarWhereInput[]
    NOT?: EvalRunScalarWhereInput | EvalRunScalarWhereInput[]
    id?: StringFilter<"EvalRun"> | string
    datasetId?: StringFilter<"EvalRun"> | string
    promptId?: StringFilter<"EvalRun"> | string
    modelConfigId?: StringFilter<"EvalRun"> | string
    status?: StringFilter<"EvalRun"> | string
    startedAt?: DateTimeNullableFilter<"EvalRun"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"EvalRun"> | Date | string | null
    aggregateScore?: JsonNullableFilter<"EvalRun">
    createdAt?: DateTimeFilter<"EvalRun"> | Date | string
  }

  export type DatasetCreateWithoutDocumentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    evalRuns?: EvalRunCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutDocumentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    evalRuns?: EvalRunUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutDocumentsInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutDocumentsInput, DatasetUncheckedCreateWithoutDocumentsInput>
  }

  export type DocumentCreateWithoutDatasetDocsInput = {
    id?: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt?: Date | string
    evalResults?: EvalResultCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutDatasetDocsInput = {
    id?: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt?: Date | string
    evalResults?: EvalResultUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutDatasetDocsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutDatasetDocsInput, DocumentUncheckedCreateWithoutDatasetDocsInput>
  }

  export type DatasetUpsertWithoutDocumentsInput = {
    update: XOR<DatasetUpdateWithoutDocumentsInput, DatasetUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DatasetCreateWithoutDocumentsInput, DatasetUncheckedCreateWithoutDocumentsInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutDocumentsInput, DatasetUncheckedUpdateWithoutDocumentsInput>
  }

  export type DatasetUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalRuns?: EvalRunUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalRuns?: EvalRunUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type DocumentUpsertWithoutDatasetDocsInput = {
    update: XOR<DocumentUpdateWithoutDatasetDocsInput, DocumentUncheckedUpdateWithoutDatasetDocsInput>
    create: XOR<DocumentCreateWithoutDatasetDocsInput, DocumentUncheckedCreateWithoutDatasetDocsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutDatasetDocsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutDatasetDocsInput, DocumentUncheckedUpdateWithoutDatasetDocsInput>
  }

  export type DocumentUpdateWithoutDatasetDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalResults?: EvalResultUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutDatasetDocsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evalResults?: EvalResultUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type EvalRunCreateWithoutPromptInput = {
    id?: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutEvalRunsInput
    modelConfig: ModelConfigCreateNestedOneWithoutEvalRunsInput
    results?: EvalResultCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunUncheckedCreateWithoutPromptInput = {
    id?: string
    datasetId: string
    modelConfigId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    results?: EvalResultUncheckedCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunCreateOrConnectWithoutPromptInput = {
    where: EvalRunWhereUniqueInput
    create: XOR<EvalRunCreateWithoutPromptInput, EvalRunUncheckedCreateWithoutPromptInput>
  }

  export type EvalRunCreateManyPromptInputEnvelope = {
    data: EvalRunCreateManyPromptInput | EvalRunCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type EvalRunUpsertWithWhereUniqueWithoutPromptInput = {
    where: EvalRunWhereUniqueInput
    update: XOR<EvalRunUpdateWithoutPromptInput, EvalRunUncheckedUpdateWithoutPromptInput>
    create: XOR<EvalRunCreateWithoutPromptInput, EvalRunUncheckedCreateWithoutPromptInput>
  }

  export type EvalRunUpdateWithWhereUniqueWithoutPromptInput = {
    where: EvalRunWhereUniqueInput
    data: XOR<EvalRunUpdateWithoutPromptInput, EvalRunUncheckedUpdateWithoutPromptInput>
  }

  export type EvalRunUpdateManyWithWhereWithoutPromptInput = {
    where: EvalRunScalarWhereInput
    data: XOR<EvalRunUpdateManyMutationInput, EvalRunUncheckedUpdateManyWithoutPromptInput>
  }

  export type EvalRunCreateWithoutModelConfigInput = {
    id?: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutEvalRunsInput
    prompt: PromptTemplateCreateNestedOneWithoutEvalRunsInput
    results?: EvalResultCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunUncheckedCreateWithoutModelConfigInput = {
    id?: string
    datasetId: string
    promptId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    results?: EvalResultUncheckedCreateNestedManyWithoutEvalRunInput
  }

  export type EvalRunCreateOrConnectWithoutModelConfigInput = {
    where: EvalRunWhereUniqueInput
    create: XOR<EvalRunCreateWithoutModelConfigInput, EvalRunUncheckedCreateWithoutModelConfigInput>
  }

  export type EvalRunCreateManyModelConfigInputEnvelope = {
    data: EvalRunCreateManyModelConfigInput | EvalRunCreateManyModelConfigInput[]
    skipDuplicates?: boolean
  }

  export type EvalRunUpsertWithWhereUniqueWithoutModelConfigInput = {
    where: EvalRunWhereUniqueInput
    update: XOR<EvalRunUpdateWithoutModelConfigInput, EvalRunUncheckedUpdateWithoutModelConfigInput>
    create: XOR<EvalRunCreateWithoutModelConfigInput, EvalRunUncheckedCreateWithoutModelConfigInput>
  }

  export type EvalRunUpdateWithWhereUniqueWithoutModelConfigInput = {
    where: EvalRunWhereUniqueInput
    data: XOR<EvalRunUpdateWithoutModelConfigInput, EvalRunUncheckedUpdateWithoutModelConfigInput>
  }

  export type EvalRunUpdateManyWithWhereWithoutModelConfigInput = {
    where: EvalRunScalarWhereInput
    data: XOR<EvalRunUpdateManyMutationInput, EvalRunUncheckedUpdateManyWithoutModelConfigInput>
  }

  export type DatasetCreateWithoutEvalRunsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    documents?: DatasetDocumentCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutEvalRunsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    documents?: DatasetDocumentUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutEvalRunsInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutEvalRunsInput, DatasetUncheckedCreateWithoutEvalRunsInput>
  }

  export type PromptTemplateCreateWithoutEvalRunsInput = {
    id?: string
    name: string
    version?: number
    systemPrompt: string
    userPrompt: string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: string | null
    createdAt?: Date | string
  }

  export type PromptTemplateUncheckedCreateWithoutEvalRunsInput = {
    id?: string
    name: string
    version?: number
    systemPrompt: string
    userPrompt: string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: string | null
    createdAt?: Date | string
  }

  export type PromptTemplateCreateOrConnectWithoutEvalRunsInput = {
    where: PromptTemplateWhereUniqueInput
    create: XOR<PromptTemplateCreateWithoutEvalRunsInput, PromptTemplateUncheckedCreateWithoutEvalRunsInput>
  }

  export type ModelConfigCreateWithoutEvalRunsInput = {
    id?: string
    provider: string
    modelId: string
    displayName: string
    isActive?: boolean
  }

  export type ModelConfigUncheckedCreateWithoutEvalRunsInput = {
    id?: string
    provider: string
    modelId: string
    displayName: string
    isActive?: boolean
  }

  export type ModelConfigCreateOrConnectWithoutEvalRunsInput = {
    where: ModelConfigWhereUniqueInput
    create: XOR<ModelConfigCreateWithoutEvalRunsInput, ModelConfigUncheckedCreateWithoutEvalRunsInput>
  }

  export type EvalResultCreateWithoutEvalRunInput = {
    id?: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    document: DocumentCreateNestedOneWithoutEvalResultsInput
    humanReview?: HumanReviewCreateNestedOneWithoutEvalResultInput
  }

  export type EvalResultUncheckedCreateWithoutEvalRunInput = {
    id?: string
    documentId: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    humanReview?: HumanReviewUncheckedCreateNestedOneWithoutEvalResultInput
  }

  export type EvalResultCreateOrConnectWithoutEvalRunInput = {
    where: EvalResultWhereUniqueInput
    create: XOR<EvalResultCreateWithoutEvalRunInput, EvalResultUncheckedCreateWithoutEvalRunInput>
  }

  export type EvalResultCreateManyEvalRunInputEnvelope = {
    data: EvalResultCreateManyEvalRunInput | EvalResultCreateManyEvalRunInput[]
    skipDuplicates?: boolean
  }

  export type DatasetUpsertWithoutEvalRunsInput = {
    update: XOR<DatasetUpdateWithoutEvalRunsInput, DatasetUncheckedUpdateWithoutEvalRunsInput>
    create: XOR<DatasetCreateWithoutEvalRunsInput, DatasetUncheckedCreateWithoutEvalRunsInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutEvalRunsInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutEvalRunsInput, DatasetUncheckedUpdateWithoutEvalRunsInput>
  }

  export type DatasetUpdateWithoutEvalRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DatasetDocumentUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutEvalRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DatasetDocumentUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type PromptTemplateUpsertWithoutEvalRunsInput = {
    update: XOR<PromptTemplateUpdateWithoutEvalRunsInput, PromptTemplateUncheckedUpdateWithoutEvalRunsInput>
    create: XOR<PromptTemplateCreateWithoutEvalRunsInput, PromptTemplateUncheckedCreateWithoutEvalRunsInput>
    where?: PromptTemplateWhereInput
  }

  export type PromptTemplateUpdateToOneWithWhereWithoutEvalRunsInput = {
    where?: PromptTemplateWhereInput
    data: XOR<PromptTemplateUpdateWithoutEvalRunsInput, PromptTemplateUncheckedUpdateWithoutEvalRunsInput>
  }

  export type PromptTemplateUpdateWithoutEvalRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateWithoutEvalRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    systemPrompt?: StringFieldUpdateOperationsInput | string
    userPrompt?: StringFieldUpdateOperationsInput | string
    outputSchema?: NullableJsonNullValueInput | InputJsonValue
    node?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelConfigUpsertWithoutEvalRunsInput = {
    update: XOR<ModelConfigUpdateWithoutEvalRunsInput, ModelConfigUncheckedUpdateWithoutEvalRunsInput>
    create: XOR<ModelConfigCreateWithoutEvalRunsInput, ModelConfigUncheckedCreateWithoutEvalRunsInput>
    where?: ModelConfigWhereInput
  }

  export type ModelConfigUpdateToOneWithWhereWithoutEvalRunsInput = {
    where?: ModelConfigWhereInput
    data: XOR<ModelConfigUpdateWithoutEvalRunsInput, ModelConfigUncheckedUpdateWithoutEvalRunsInput>
  }

  export type ModelConfigUpdateWithoutEvalRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModelConfigUncheckedUpdateWithoutEvalRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EvalResultUpsertWithWhereUniqueWithoutEvalRunInput = {
    where: EvalResultWhereUniqueInput
    update: XOR<EvalResultUpdateWithoutEvalRunInput, EvalResultUncheckedUpdateWithoutEvalRunInput>
    create: XOR<EvalResultCreateWithoutEvalRunInput, EvalResultUncheckedCreateWithoutEvalRunInput>
  }

  export type EvalResultUpdateWithWhereUniqueWithoutEvalRunInput = {
    where: EvalResultWhereUniqueInput
    data: XOR<EvalResultUpdateWithoutEvalRunInput, EvalResultUncheckedUpdateWithoutEvalRunInput>
  }

  export type EvalResultUpdateManyWithWhereWithoutEvalRunInput = {
    where: EvalResultScalarWhereInput
    data: XOR<EvalResultUpdateManyMutationInput, EvalResultUncheckedUpdateManyWithoutEvalRunInput>
  }

  export type EvalRunCreateWithoutResultsInput = {
    id?: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    dataset: DatasetCreateNestedOneWithoutEvalRunsInput
    prompt: PromptTemplateCreateNestedOneWithoutEvalRunsInput
    modelConfig: ModelConfigCreateNestedOneWithoutEvalRunsInput
  }

  export type EvalRunUncheckedCreateWithoutResultsInput = {
    id?: string
    datasetId: string
    promptId: string
    modelConfigId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EvalRunCreateOrConnectWithoutResultsInput = {
    where: EvalRunWhereUniqueInput
    create: XOR<EvalRunCreateWithoutResultsInput, EvalRunUncheckedCreateWithoutResultsInput>
  }

  export type DocumentCreateWithoutEvalResultsInput = {
    id?: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt?: Date | string
    datasetDocs?: DatasetDocumentCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutEvalResultsInput = {
    id?: string
    name: string
    originalName: string
    storagePath: string
    extractedText: string
    pageCount: number
    createdAt?: Date | string
    datasetDocs?: DatasetDocumentUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutEvalResultsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutEvalResultsInput, DocumentUncheckedCreateWithoutEvalResultsInput>
  }

  export type HumanReviewCreateWithoutEvalResultInput = {
    id?: string
    reviewerId?: string | null
    score: number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type HumanReviewUncheckedCreateWithoutEvalResultInput = {
    id?: string
    reviewerId?: string | null
    score: number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
  }

  export type HumanReviewCreateOrConnectWithoutEvalResultInput = {
    where: HumanReviewWhereUniqueInput
    create: XOR<HumanReviewCreateWithoutEvalResultInput, HumanReviewUncheckedCreateWithoutEvalResultInput>
  }

  export type EvalRunUpsertWithoutResultsInput = {
    update: XOR<EvalRunUpdateWithoutResultsInput, EvalRunUncheckedUpdateWithoutResultsInput>
    create: XOR<EvalRunCreateWithoutResultsInput, EvalRunUncheckedCreateWithoutResultsInput>
    where?: EvalRunWhereInput
  }

  export type EvalRunUpdateToOneWithWhereWithoutResultsInput = {
    where?: EvalRunWhereInput
    data: XOR<EvalRunUpdateWithoutResultsInput, EvalRunUncheckedUpdateWithoutResultsInput>
  }

  export type EvalRunUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutEvalRunsNestedInput
    prompt?: PromptTemplateUpdateOneRequiredWithoutEvalRunsNestedInput
    modelConfig?: ModelConfigUpdateOneRequiredWithoutEvalRunsNestedInput
  }

  export type EvalRunUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    modelConfigId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpsertWithoutEvalResultsInput = {
    update: XOR<DocumentUpdateWithoutEvalResultsInput, DocumentUncheckedUpdateWithoutEvalResultsInput>
    create: XOR<DocumentCreateWithoutEvalResultsInput, DocumentUncheckedCreateWithoutEvalResultsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutEvalResultsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutEvalResultsInput, DocumentUncheckedUpdateWithoutEvalResultsInput>
  }

  export type DocumentUpdateWithoutEvalResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetDocs?: DatasetDocumentUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutEvalResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    storagePath?: StringFieldUpdateOperationsInput | string
    extractedText?: StringFieldUpdateOperationsInput | string
    pageCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    datasetDocs?: DatasetDocumentUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type HumanReviewUpsertWithoutEvalResultInput = {
    update: XOR<HumanReviewUpdateWithoutEvalResultInput, HumanReviewUncheckedUpdateWithoutEvalResultInput>
    create: XOR<HumanReviewCreateWithoutEvalResultInput, HumanReviewUncheckedCreateWithoutEvalResultInput>
    where?: HumanReviewWhereInput
  }

  export type HumanReviewUpdateToOneWithWhereWithoutEvalResultInput = {
    where?: HumanReviewWhereInput
    data: XOR<HumanReviewUpdateWithoutEvalResultInput, HumanReviewUncheckedUpdateWithoutEvalResultInput>
  }

  export type HumanReviewUpdateWithoutEvalResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumanReviewUncheckedUpdateWithoutEvalResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    entityScores?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalResultCreateWithoutHumanReviewInput = {
    id?: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    evalRun: EvalRunCreateNestedOneWithoutResultsInput
    document: DocumentCreateNestedOneWithoutEvalResultsInput
  }

  export type EvalResultUncheckedCreateWithoutHumanReviewInput = {
    id?: string
    evalRunId: string
    documentId: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalResultCreateOrConnectWithoutHumanReviewInput = {
    where: EvalResultWhereUniqueInput
    create: XOR<EvalResultCreateWithoutHumanReviewInput, EvalResultUncheckedCreateWithoutHumanReviewInput>
  }

  export type EvalResultUpsertWithoutHumanReviewInput = {
    update: XOR<EvalResultUpdateWithoutHumanReviewInput, EvalResultUncheckedUpdateWithoutHumanReviewInput>
    create: XOR<EvalResultCreateWithoutHumanReviewInput, EvalResultUncheckedCreateWithoutHumanReviewInput>
    where?: EvalResultWhereInput
  }

  export type EvalResultUpdateToOneWithWhereWithoutHumanReviewInput = {
    where?: EvalResultWhereInput
    data: XOR<EvalResultUpdateWithoutHumanReviewInput, EvalResultUncheckedUpdateWithoutHumanReviewInput>
  }

  export type EvalResultUpdateWithoutHumanReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    evalRun?: EvalRunUpdateOneRequiredWithoutResultsNestedInput
    document?: DocumentUpdateOneRequiredWithoutEvalResultsNestedInput
  }

  export type EvalResultUncheckedUpdateWithoutHumanReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRunId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentCreateManyDocumentInput = {
    id?: string
    datasetId: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalResultCreateManyDocumentInput = {
    id?: string
    evalRunId: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
    dataset?: DatasetUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DatasetDocumentUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalResultUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    evalRun?: EvalRunUpdateOneRequiredWithoutResultsNestedInput
    humanReview?: HumanReviewUpdateOneWithoutEvalResultNestedInput
  }

  export type EvalResultUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRunId?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    humanReview?: HumanReviewUncheckedUpdateOneWithoutEvalResultNestedInput
  }

  export type EvalResultUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    evalRunId?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentCreateManyDatasetInput = {
    id?: string
    documentId: string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalRunCreateManyDatasetInput = {
    id?: string
    promptId: string
    modelConfigId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DatasetDocumentUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
    document?: DocumentUpdateOneRequiredWithoutDatasetDocsNestedInput
  }

  export type DatasetDocumentUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DatasetDocumentUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    groundTruth?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalRunUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptTemplateUpdateOneRequiredWithoutEvalRunsNestedInput
    modelConfig?: ModelConfigUpdateOneRequiredWithoutEvalRunsNestedInput
    results?: EvalResultUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    modelConfigId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: EvalResultUncheckedUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    modelConfigId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalRunCreateManyPromptInput = {
    id?: string
    datasetId: string
    modelConfigId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EvalRunUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutEvalRunsNestedInput
    modelConfig?: ModelConfigUpdateOneRequiredWithoutEvalRunsNestedInput
    results?: EvalResultUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunUncheckedUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    modelConfigId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: EvalResultUncheckedUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunUncheckedUpdateManyWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    modelConfigId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalRunCreateManyModelConfigInput = {
    id?: string
    datasetId: string
    promptId: string
    status?: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EvalRunUpdateWithoutModelConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneRequiredWithoutEvalRunsNestedInput
    prompt?: PromptTemplateUpdateOneRequiredWithoutEvalRunsNestedInput
    results?: EvalResultUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunUncheckedUpdateWithoutModelConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: EvalResultUncheckedUpdateManyWithoutEvalRunNestedInput
  }

  export type EvalRunUncheckedUpdateManyWithoutModelConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    datasetId?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aggregateScore?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvalResultCreateManyEvalRunInput = {
    id?: string
    documentId: string
    rawOutput: string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs: number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EvalResultUpdateWithoutEvalRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    document?: DocumentUpdateOneRequiredWithoutEvalResultsNestedInput
    humanReview?: HumanReviewUpdateOneWithoutEvalResultNestedInput
  }

  export type EvalResultUncheckedUpdateWithoutEvalRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
    humanReview?: HumanReviewUncheckedUpdateOneWithoutEvalResultNestedInput
  }

  export type EvalResultUncheckedUpdateManyWithoutEvalRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    rawOutput?: StringFieldUpdateOperationsInput | string
    parsedOutput?: NullableJsonNullValueInput | InputJsonValue
    latencyMs?: IntFieldUpdateOperationsInput | number
    tokenUsage?: NullableJsonNullValueInput | InputJsonValue
    autoScore?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}