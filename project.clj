(defproject freeq-match-engine "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-json "0.3.1"]
                 [ring-server "0.4.0"]
                 [clj-freeq "0.0.1-SNAPSHOT"]]
  :plugins [[lein-ring "0.8.13"]]
  :ring {:handler freeq-match-engine.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}
  :repositories [["local" ~(str (.toURI (java.io.File. "/Users/rui.yang/.m2/repository")))]])
