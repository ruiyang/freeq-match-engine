(defproject freeq-match-engine "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :source-paths ["src" "src-cljs"]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.3.1"]
                 [ring/ring-defaults "0.1.2"]
                 [ring/ring-json "0.3.1"]
                 [ring-server "0.3.1"]
                 [clj-freeq "0.0.1-SNAPSHOT"]
                 [org.clojure/clojurescript "0.0-3196"]]
  :plugins [[lein-ring "0.8.13"]
            [lein-cljsbuild "1.0.5"]
            [lein-pprint "1.1.1"]]
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]
                                  [enlive "1.1.5"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :plugins [[com.cemerick/austin "0.1.6"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :resource-paths ["dev/resources"]
                   :source-paths ["dev/src/clj" "src" "src-cljs"]}}
  :repositories [["local" ~(str (.toURI (java.io.File. "/Users/rui.yang/.m2/repository")))]]
  :cljsbuild {
              :builds [{
                                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["src-cljs"]
                                        ; The standard ClojureScript compiler options:
                                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                                   :output-to "resources/public/cljs/main.js"  ; default: target/cljsbuild-main.js
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {
                                        ; The path to the top-level ClojureScript source directory:
                        :source-paths ["dev/src/cljs"]
                                        ; The standard ClojureScript compiler options:
                                        ; (See the ClojureScript compiler documentation for details.)
                        :compiler {
                                   :output-to "dev/resources/web/cljs/repl.js"  ; default: target/cljsbuild-main.js
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       ]})
